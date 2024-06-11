const User = require('../models/User');

module.exports = {
  // getUsers
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // getOneUser
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate('thoughts', 'friends');

      if (!user) {
        return res.status(400).json({ message: 'No user found with that ID' })
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
      // filter is the "where"
      const filter = '';
      // update is the "thing to update"
      const update = '';
      const result = await User.findOneandUpdate(filter, update);
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
        res.status(400).json({message: 'No user found with that ID'})
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // add new friend
  async addFriend(req, res) {
    try {
      // we have two parameters, :userId and :friendId
      // add :friendId to :userId's friend list
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete friend
  async removeFriend(req, res) {
    try {
      // we have two parameters, :userId and :friendId
      // add :friendId to :userId's friend list
    } catch (err) {
      res.status(500).json(err);
    }
  }
}