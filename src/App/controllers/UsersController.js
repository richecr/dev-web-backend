const users = require('../../bd/users');

let idController = 6

class UsersController {
  async index(req, res) {
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

    users.push({
      name,
      id: idController,
      email,
      password,
      url_avatar,
      occupation,
      state,
      city,
      neighborhood,
      price,
    });

    const user = users.find(user => user.id === idController);
    idController++;

    return res.json(user);
  }
}

module.exports = new UsersController();