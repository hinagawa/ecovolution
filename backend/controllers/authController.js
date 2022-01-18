const User = require('../models/User.js');
const Token = require('../models/Token.js');
const bcrypt = require('bcrypt');
const config = require('config');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail.js');

const SALT = config.get('salt');

exports.signUp = async (req, res) => {
    try {
        const { name, lastname, email, password } = req.body;
        const candidate = await User.findOne({ email });
        if (candidate) return res.status(400).json({ message: 'User with this email already exist' });
        const hashedPassword = await bcrypt.hash(password, +SALT);
        const user = new User({ name, lastname, email, password: hashedPassword });
        await user.save();
        res.status(200).json({ message: 'User has been created' });
    }
    catch (e) {
        res.status(500).json({ message: `Something went wrong! ${e.message}` });
    }
};

exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('password');
        if (!user) return new Error('User not found');
        const isMatch = await user.comparePasswords(password);
        const token = await user.createJwtToken(isMatch, user);
        res.cookie('jwt', token);
        res.json({ success: true, token });
    }
    catch (e) {
        res.status(500).json({ message: `Something went wrong! ${e.message}` });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('User with this email does not exist');
        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex'),
            }).save();
        }
        const link = `${config.host}/password-reset/${user._id}/${token.token}`;
        console.log(link);
        await sendEmail(user.email, 'Password reset', link);
        res.send('Password reset link sent to your email');
    }
    catch (e) {
        res.status(400).send(e.message);
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send('User does not exist');
        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        });
        if (!token) return res.status(400).send('Invalid link or expired');
        user.password = req.body.password;
        await user.save();
        await token.delete();
        res.send('Password reset successfully');
    }
    catch (e) {
        res.send('An error occured');
        console.log(new Error(e.message));
    }
};
