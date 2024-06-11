const Thought = require('../models/Thought');

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
            const newThought = Thought.create(req.body);
            res.status(200).json(newThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
            const oneThought = await Thought.findOne({ _id: req.params.userId })
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

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async newReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }
}