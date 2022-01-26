const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const config = require('config');
const sendEmail = require('../utils/sendEmail.js');

const SALT = config.get('salt');

exports.signUp = async (req, res) => {
    try {
        const { name, lastname, email, password } = req.body;
        const candidate = await User.findOne({ email });
        if (candidate) return res.status(409).json({ success: false, message: 'User with this email already exist' });
        const hashedPassword = await bcrypt.hash(password, +SALT);
        const user = new User({ name, lastname, email, password: hashedPassword });
        await user.save();
        res.status(200).json({ success: true, message: 'User has been created' });
    }
    catch (e) {
        res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('password');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        const isMatch = await user.comparePasswords(password);
        const token = await user.createJwtToken(isMatch, user);
        console.log(token);
        res.cookie('Token', 'Bearer ' + token);
        res.json({ success: true, message: 'Token created' });
    }
    catch (e) {
        res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ success: false, message: 'User with this email does not exist' });
        const resetToken = await user.getResetPasswordToken();
        await user.save();
        const link = `${config.host}/api/reset-password?userId=${user._id}&resetToken=${resetToken}`;
        const text = `
        You have requested a password reset
        Please go to this link to reset your password ${link}`;
        await sendEmail(user.email, 'Password reset', text);
        res.status(200).json({ success: true, message: 'Reset link sent' });
    }
    catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
};

exports.resetPassword = async (req, res) => {
    const resetToken = req.params.resetToken;
    try {
        const user = await User.findOne({
            resetToken,
            resetPasswordExpire: { $gt: Date.now() }
        });
        if (!user) return res.status(400).json({ success: false, message: 'Invalid reset Token' });
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        res.status(200).json({ success: true, message: 'Password reset successfully' });
    }
    catch (e) {
        res.status(500).json({ success: false, message: 'An error occured' });
        console.log(new Error(e.message));
    }
};
