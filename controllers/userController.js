const User = require('../models/User');

module.exports = {
  // getUsers
  async getUsers(req, res) {
    try {
      const users = await User.find();
      // .populate('thoughts');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // getOneUser
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
        // .populate('thoughts', 'friends');

      if (!user) {
        return res.status(400).json({ message: "No user found with that ID" })
      }

      res.json(user)

    } catch (err) {
      res.status(500).json(err);
    }
  },

  // createUser
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // updateUser
  async updateUser(req, res) {
    try {
      // filter is the "where", update is the "thing to update"
      const filter = { _id: req.params.userId };
      const update = req.body;
      const result = await User.findOneAndUpdate(filter, update, { new: true, runValidators: true });
      if (!result) {
        res.status(400).json({message: "sorry, no user found with that ID"})
      }
      res.status(200).json(result);
      // update based on id
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // deleteUser
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      if(!user) {
        res.status(400).json({message: "No user found with that ID"})
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  // /:userId/friends/:friendId
  // add new friend
  async addFriend(req, res) {
    try {
      const newFriend = req.params.friendId;
      const result = await User.findOneAndUpdate(
        { _id: req.params.userId},
        { $addToSet: {friends: newFriend}},
        { new: true, runValidators: true }
      )
      if (!result) {
        res.status(400).json({ message: "error with user ID or friend ID"})
      }
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete friend
  async removeFriend(req, res) {
    try {
      const exFriend = req.params.friendId;
      const result = await User.findOneAndUpdate(
        { _id: req.params.userId},
        { $pull: { friends: exFriend} },
        { new: true }
      )
      if (!result) {
        res.status(400).json({ message: "error with user ID or ex-friend ID"})
      }
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}