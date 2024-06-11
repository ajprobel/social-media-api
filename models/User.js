const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // must match valid email address
    },
    thoughts: {
      // array of _id values referencing 'thought' model
    },
    friends: {
      // array of _id values referencing 'user' model
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

const User = mongoose.model('User', userSchema);

module.exports = User;