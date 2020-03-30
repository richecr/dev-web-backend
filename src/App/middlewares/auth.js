const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // Transforma a função `jwt.verify` em uma promisse para usar async/await
    const decoded = await promisify(jwt.verify)(
      token,
      'c706a38d356b588477ff8a4f46c203f5',
    );

    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token not provided' });
  }
};
