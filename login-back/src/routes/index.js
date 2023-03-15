const express = require('express');
const login = require('../SQL/login');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('하이');
});

router.post('/', async (req, res) => {
  const response = {
    status: 200,
    message: '로그인 성공',
  };
  const { id: reqId, pw: reqPW } = req.body;
  const result = await login();
  let success = false;
  result.forEach((info) => {
    const { id, pw } = info;
    console.log(id, pw);
    if (id === reqId && pw === reqPW) res.json(response);
    success = true;
  });
  if (!success)
    res.status(401).json({
      status: 401,
      message: '로그인 실패',
    });
});
module.exports = router;
