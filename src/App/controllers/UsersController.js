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
      "rating": 4,
      "url_avatar": 5,
      "occupation": 6,
      "state": 7,
      "city": 8,
      "neighborhood": 9,
      "price": 10,
    })
    .populate([
      {
        path: 'rating',
        model: 'Evaluation',
        select: '-_id -user_provider -__v',
        populate: {
          path: 'user_client',
          model: 'User',
          select: 'name email phone'
        }
      }
    ]);

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