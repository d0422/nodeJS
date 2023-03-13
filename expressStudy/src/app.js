const express = require('express');
const path = require('path');

const app = express();
app.set('port', 3000);
app.get(
  '/',
  (req, res, next) => {
    console.log('GET요청이네용');
    res.sendFile(path.join(__dirname, '/index.html'));
    next();
  },
  (req, res) => {
    throw new Error('에러는 에러처리 미들웨어로 갑니다.');
  }
);
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트로 서버 열림');
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});
