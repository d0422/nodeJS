const jwt = require('jsonwebtoken');
const jwtMaker = (id) => {
  const payload = { id: id };
  const secret = process.env.SECRET;
  const options = {
    expiresIn: '1m',
  };
  const accessToken = jwt.sign(payload, secret, options);

  const refreshToken = jwt.sign(
    { access: accessToken, id: id },
    process.env.SECRET,
    {
      expiresIn: '14d',
    }
  );
  return { accessToken, refreshToken };
};
module.exports = jwtMaker;
