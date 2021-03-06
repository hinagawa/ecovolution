const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema, model } = require('mongoose');

const keys = require('../config/keys');

const UserSchema = new Schema({
    googleId: String,
    email: {
        type: String,
        required: [true, 'You should provide an email'],
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'You should provide valid email']
    },
    password: {
        type: String,
        required: [true, 'You should provide a password'],
        minlength: 8,
        select: false
    },
    name: String,
    lastname: String,
    role: {
        type: String,
        default: 'User'
    },
    firebasePath: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    likedPosts: Array,
});

UserSchema.methods.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.createJwtToken = async function () {
    const data = {
        id: this._id,
        username: this.username
    };
    return jwt.sign(data, keys.jwt_secret, { expiresIn: keys.jwt_expire });
};


UserSchema.methods.getResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetPasswordToken = await crypto.createHash('sha256').update(resetToken).digest('hex');
    const resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    this.resetPasswordToken = resetPasswordToken;
    this.resetPasswordExpire = resetPasswordExpire;
    return this.resetPasswordToken;
};
module.exports = model('users', UserSchema);
