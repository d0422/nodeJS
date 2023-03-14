const express = require('express');
const connectMySQL = require('../mysql');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello, Express');
  connectMySQL();
});
module.exports = router;
