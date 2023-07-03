const router = require('express').Router();
const jwtRefresh = require('../auth/jwtRefresh');
const jwtMaker = require('../auth/jwtMaker');
router.post('/', (req, res) => {
  const access = req.headers.authorization;
  const { refreshToken } = req.body;
  try {
    decoded = jwtRefresh({ access, refreshToken });
    const token = jwtMaker(decoded.id);
    res.json(token);
  } catch (err) {
    res.status(401).json({ message: '유효하지 않은 refresh token입니다.' });
  }
});
module.exports = router;
