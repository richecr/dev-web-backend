const User = require('../models/User');
const Evaluation = require('../models/Evaluation');

class ServiceEvaluationController {
  async index(req, res) {
    const { email_user_provider } = req.body;

    const user_provider = await User.findOne({
      email: email_user_provider,
    });

    const evaluations = await Evaluation.find({
      user_provider: user_provider._id,
    })
    .populate({ path: 'user_client', select: 'name email phone url_avatar' })
    .populate({ path: 'user_provider', select: 'name email phone url_avatar' })
    .exec();

    return res.json(evaluations);
  }

  async store(req, res) {
    const { email_user_provider, email_user_client, note } = req.body;

    const user_provider = await User.findOne({
      email: email_user_provider,
    });

    const user_client = await User.findOne({
      email: email_user_client,
    });

    // validações.

    const evaluation = await Evaluation.create({
      user_provider: user_provider._id,
      user_client: user_client._id,
      note,
    });

    return res.json(evaluation);
  }
}

module.exports = new ServiceEvaluationController();