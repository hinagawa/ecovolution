const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const config = require('config');

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
        isMatch ? 'token' : new Error('Invalid password');
    }
    catch (e) {
        res.status(500).json({ message: `Something went wrong! ${e.message}` });
    }
};