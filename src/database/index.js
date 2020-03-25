const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rickecr:rick123lsi@cluster0-mlk1i.mongodb.net/devweb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});