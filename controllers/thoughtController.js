const Thought = require('../models/Thought');
const User = require('../models/User')

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)
            const result = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: newThought._id }},
                { new: true }
            )
            if (!result) {
                res.status(400).json({ message: "error appending thought to user"})
            }
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
            const oneThought = await Thought.findOne({ _id: req.params.thoughtId })
                .populate('reactions');
            if (!oneThought) {
                return res.status(400).json({ message: 'No thought found with that ID' });
            }
            res.status(200).json(oneThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const filter = { _id: req.params.thoughtId };
            const update = req.body;
            const result = await Thought.findOneAndUpdate(filter, update, { new: true, runValidators: true });
            if (!result) {
              res.status(400).json({message: "sorry, no thought found with that ID"})
            }
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const id = req.params.thoughtId
            const thought = await Thought.findOneAndDelete({ _id: id }, { new: true });
            const updateUser = await User.findOneAndUpdate(
                { thoughts: id },
                { $pull: { thoughts: id } },
                { new: true }
            )
            if(!thought) {
              res.status(400).json({message: "No user found with that ID"})
            } else {
                res.status(200).json(thought);
                updateUser;
            }
            
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async newReaction(req, res) {
        try {
            const newReaction = req.body
            const result = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet:  { reactions: newReaction } },
                { new: true }
            )
            if (!result) {
                res.status(400).json({message: "error adding reaction to that ID"});
            }
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeReaction(req, res) {
        try {
            const exThought = req.params.reactionId;
            const result = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: exThought } } },
                { runValidators: true, new: true }
            )
            if (!result) {
                res.status(400).json({ message: "error with provided thought ID or reaction ID"})
            }
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}