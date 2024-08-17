const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registrationNo: {
    type: String,
    required: true,
    unique: true
  },
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'student'
  },
  department: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('User', UserSchema);
