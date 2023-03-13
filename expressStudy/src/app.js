const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use(morgan('dev'));
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트로 서버 열림');
});
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});
