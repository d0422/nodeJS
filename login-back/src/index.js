const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.set('port', 3000);
app.use(
  cors({
    origin: '*',
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트로 서버 ON');
});
const defaultRouter = require('./routes/index');
app.use('/', defaultRouter);
