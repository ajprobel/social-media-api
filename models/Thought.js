const { Schema, model }  = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: formatDate
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    }
  }
);

// function formatDate(date) {

// }

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;