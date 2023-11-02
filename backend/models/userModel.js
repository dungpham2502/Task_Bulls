const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    full_name: {
        type: String,
        required: true,
    },
    usf_id: {
        type: Number,
        required: true,
        unique: true
    },
    phone_num: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;