const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema fields here, like name, email, password, etc.
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
