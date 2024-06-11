const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // length between 1-280 char
    },
    createdAt: {
      type: Date,
      // set default to current timestamp
      // use getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      // array of nested documents created with 'reactionSchema'
    }
  },
  {
    virtual: {
      toJSON: true,
    }
  }
);

thoughtSchema.vritual('reactionCount').get(function() {
  return this.reactions.length;
})

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;