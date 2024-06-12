const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), 
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: formatDate
    }
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

// function formatDate(date) {

// }

// just exporting schema for use as subdoc in 'Thought' model
module.exports = reactionSchema;