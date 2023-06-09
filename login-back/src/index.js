const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.set('port', 8080);
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
const router = require('./routes/index');
app.use(router);
