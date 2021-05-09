const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const hashPassword = require('../helpers/hash');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});


// Password hashing
userSchema.pre('save', function (next) {
    if (this.password)
        this.password = hashPassword(this.password);
    next();
});

// Validate password
userSchema.methods.validatePassword = function (data) {
    return bcrypt.compare(data, this.password);
}

// migration


const User = mongoose.model('User', userSchema);

module.exports = User;
