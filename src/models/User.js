const { Schema, model } = require('mongoose');


const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: new Date().toISOString()
    }
});

module.exports = model('User', UserSchema);
