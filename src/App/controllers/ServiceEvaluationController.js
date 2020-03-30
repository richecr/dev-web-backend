const User = require('../models/User');
const Evaluation = require('../models/Evaluation');

class ServiceEvaluationController {
  async index(req, res) {
    const { email_provider } = req.body;

    const userProvider = await User.findOne({
      email: email_provider,
    });

    const evaluations = await Evaluation.find({
      user_provider: userProvider._id,
    })
      .populate({ path: 'user_client', select: 'name email phone url_avatar' })
      .populate({
        path: 'user_provider',
        select: 'name email phone url_avatar',
      })
      .exec();

    return res.json(evaluations);
  }

  async store(req, res) {
    const { email_provider, email_client, note } = req.body;

    const user_provider = await User.findOne({
      email: email_provider,
    });

    const user_client = await User.findOne(
      {
        email: email_client,
      },
      '_id',
    );

    // validações.
    const evaluation = await Evaluation.findOneAndUpdate(
      {
        user_provider: user_provider.id,
        user_client: user_client._id,
      },
      { note },
      { new: true, upsert: true },
    );

    await User.findByIdAndUpdate(
      user_provider._id,
      { $addToSet: { rating: evaluation._id } },
      { new: true },
    );

    return res.status(200).json(evaluation);
  }
}

module.exports = new ServiceEvaluationController();
