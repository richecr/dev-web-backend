// const users = require('../../database/users');
const User = require('../models/User');

let idController = 6

class UsersController {
  async index(req, res) {
    const users = await User.find({}, {
      "_id": 0,
      "name": 1,
      "email": 2,
      "phone": 3,
      "ranking": 4,
      "rating": 5,
      "url_avatar": 6,
      "occupation": 7,
      "state": 8,
      "city": 9,
      "neighborhood": 10,
      "price": 11,
    });

    return res.json(users);
  }

  async store(req, res) {
    const {
      name,
      email,
      password,
      phone,
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
      phone,
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