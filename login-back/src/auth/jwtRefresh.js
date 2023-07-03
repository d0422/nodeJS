const jwt = require('jsonwebtoken');
const jwtRefresh = (token) => {
  const { access, refreshToken } = token;
  return jwt.verify(refreshToken, process.env.SECRET, (err, decoded) => {
    if (err) {
      throw err;
    }
    if (decoded.access == access) return decoded;
  });
};
module.exports = jwtRefresh;
