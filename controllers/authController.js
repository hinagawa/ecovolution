const bcrypt = require('bcrypt');

const User = require('../models/User.js');
const config = require('../config/dev');
const sendEmail = require('../utils/sendEmail.js');

const SALT = config.salt;
// TODO next
exports.signUp = async (req, res) => {
    try {
        const { name, lastname, email, password } = req.body;
        const candidate = await User.findOne({ email });
        if (candidate) {
            throw new Error('User with this email already exist');
        }
        const hashedPassword = await bcrypt.hash(password, +SALT);
        const user = new User({ name, lastname, email, password: hashedPassword });
        await user.save();
        res.status(200).json({ success: true, message: 'User has been created' });
    }
    catch (e) {
        if (e.message.includes('already exist')) {
            return res.status(409).json({ success: false, message: e.message });
        }
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('password');
        if (!user) throw new Error('User not found');
        const isMatch = await user.comparePasswords(password);
        const token = await user.createJwtToken(isMatch, user);
        res.cookie('Token', 'Bearer ' + token);
        res.json({ success: true, message: 'Token created' });
    }
    catch (e) {
        if (e.message.includes('not found')) {
            return res.status(404).json({ success: false, message: e.mesasge });
        }
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');
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
        if (e.message.includes('not found')) {
            return res.status(404).json({ success: false, message: e.mesasge });
        }
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });

    }
};

exports.resetPassword = async (req, res) => {
    const resetToken = req.params.resetToken;
    try {
        const user = await User.findOne({
            resetToken,
            resetPasswordExpire: { $gt: Date.now() }
        });
        if (!user) throw new Error('Invalid Reset token');
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        res.status(200).json({ success: true, message: 'Password reset successfully' });
    }
    catch (e) {
        if (e.message.includes('Invalid')) {
            return res.status(404).json({ success: false, message: e.mesasge });
        }
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};
