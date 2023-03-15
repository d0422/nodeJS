const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
  const { id, pw, name, age } = req.body;
  console.log(id, pw, name, age);
});
module.exports = router;
