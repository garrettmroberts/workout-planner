const db = require("../models");

module.exports = {

  // Finds all users
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Finds user by id
  findByID: function (req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Adds a user
  addUser: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Updates a user by id
  updateUser: function (req, res) {
    db.User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
  },

  // Deletes a user by id
  deleteUser: function (req, res) {
    db.User.findByIdAndRemove(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}