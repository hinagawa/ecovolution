const { Schema, model } = require('mongoose');

const Token = new Schema({
    userId: {
        type: String,
        required: true,
        ref: 'user'
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600
    }
});

module.exports = model('token', Token);
