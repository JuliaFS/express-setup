const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is requiredrs'],
      minLength: [5, 'Username must be at least 5 characters.'],
      match: /^[A-za-z]+$/,
      unique: true
    }, 
    password: { 
      type: String,
      required: true,
      validate: {
        validator: function(value){
          return /^[A-za-z0-9]+$/.test(value);
        },
        message: 'Invalid password characters!'
      },
      minLength: [8, 'Password must be at least 5 characters.']
    } 
  });

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Password missmatch!");
  }
});

//validate if user exists

userSchema.pre('save', async function (){
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;