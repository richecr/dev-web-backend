const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ranking: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  url_avatar: {
    type: String,
  },
  occupation: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}).pre('save', async function(next) {
  this.password = await bcryptjs.hash(this.password, 8);

  return next();
});

module.exports = mongoose.model("User", UserSchema);