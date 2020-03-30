const mongoose = require('mongoose');

const EvaluationSchema = new mongoose.Schema({
  user_provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  note: {
    type: Number,
    required: true,
  },
  user_client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Evaluation', EvaluationSchema);
