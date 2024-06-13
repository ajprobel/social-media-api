const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getOneThought,
    updateThought,
    deleteThought,
    newReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// '/api/thoughts'
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(newReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;