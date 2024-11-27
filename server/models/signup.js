const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true, unique: true },
    lastname: { type: String, required: true, unique: true },
    phonenumber: { type: Number, required: true },
    password: { type: String, required: true },
    petsname: { type: String, required: true },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      validate: {
        validator: function(v) {
          // Simple regex for validating email format
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: '{VALUE} is not a valid email address'
      }
    }
  });

const User = mongoose.model('user',userSchema);

module.exports = User;
