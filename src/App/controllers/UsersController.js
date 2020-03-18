// const users = require('../../database/users');
const User = require('../models/User');

let idController = 6

class UsersController {
  async index(req, res) {
    const users = await User.find({}, {
      "_id": 0,
      "name": 1,
      "email": 2,
      "ranking": 3,
      "rating": 4,
      "url_avatar": 5,
      "occupation": 6,
      "state": 7,
      "city": 8,
      "neighborhood": 9,
      "price": 10,
    });

    return res.json(users);
  }

  async store(req, res) {
    const {
      name,
      email,
      password,
      url_avatar,
      occupation,
      state,
      city,
      neighborhood,
      price } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      url_avatar,
      occupation,
      state,
      city,
      neighborhood,
      price
    })

    return res.json(user);
  }
}

module.exports = new UsersController();