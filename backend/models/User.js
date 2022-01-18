const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

const { Schema, model } = require('mongoose');

const issuer = config.host;

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
    }
});

UserSchema.methods.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.createJwtToken = async function (isMatch, user) {
    if (isMatch) {
        const claims = {
            sub: user.id,
            email: user.email,
            iss: issuer,
            permissions: user.role
        };

        return jwt.sign(claims, config.jwt_secret, {
            expiresIn: 60 * 15
        });
    }
};

module.exports = model('users', UserSchema);
