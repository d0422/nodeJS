const express = require('express');
const login = require('../SQL/login');
const crypto = require('crypto');
const jwtMaker = require('../auth/jwtMaker');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('하이');
});

router.post('/', async (req, res) => {
  const { id: reqId, pw: reqPW } = req.body;
  console.log(req.body);
  const result = await login();
  let success = false;
  result.forEach((info) => {
    const { id, pw, salt } = info;
    const compareHash = crypto
      .createHash('sha512')
      .update(reqPW + salt)
      .digest('hex');
    if (id === reqId && pw === compareHash) {
      const response = {
        status: 200,
        message: '로그인 성공',
        data: {
          access_token: jwtMaker(reqId),
        },
      };
      res.json(response);
      success = true;
    }
  });
  if (!success) {
    res.status(401).send('로그인 실패');
  }
});
module.exports = router;
