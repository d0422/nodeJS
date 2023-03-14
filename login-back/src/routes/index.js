const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('하이');
});

router.post('/', (req, res) => {
  console.log(req.body);
  const response = {
    status: 200,
    message: 'ok',
  };
  res.json(response);
});
module.exports = router;
