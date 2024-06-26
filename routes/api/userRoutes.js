const router = require('express').Router();
const {
    getUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// '/api/user'
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;