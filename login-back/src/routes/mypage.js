const express = require('express');
const router = express.Router();
const jwtAuth = require('../auth/jwtAuth');
const verifyjwt = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.SECRET;
  if (!token) {
    return res.status(401).json({ message: 'JWT가 필요합니다.' });
  }
  try {
    const decoded = jwtAuth(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'JWT가 유효하지 않습니다.' });
  }
};

router.get('/mypage', verifyjwt, (req, res) => {
  res.json({ message: '인증' });
});

module.exports = router;
