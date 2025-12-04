const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, { timestamps: true });

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;