const mongoose = require('mongoose');
const { userSchema } = require('../schemas/user-schema');

const UserModel = mongoose.model('user', userSchema);

module.exports =  UserModel;
