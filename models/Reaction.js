const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      // user Mongoose ObjectId data type
      // default value is set to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      // 280 char maximum
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      // default value to current timestamp
      // getter method to format timestamp on query
    }
  }
);

// just exporting schema for use as subdoc in 'Thought' model
module.exports = reactionSchema;