const mongoose = require('mongoose');

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose.connect(
      'mongodb+srv://rickecr:rick123lsi@cluster0-mlk1i.mongodb.net/devweb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    );
  }
}

module.exports = new Database();
