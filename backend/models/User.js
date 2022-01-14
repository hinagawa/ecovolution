const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    username: {
        type: String,
        required: [true, 'You should provide an username'],
        unique: true
    },
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
    lastName: String,
    role: {
        type: String,
        required: [true, 'User must have a role']
    }

});

mongoose.model('users', userSchema);
