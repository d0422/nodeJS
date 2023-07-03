const express = require('express');
const router = express.Router();

const defaultRouter = require('./login');
const signupRouter = require('./signup');
const mypageRouter = require('./mypage');
const refreshRouter = require('./refresh');
router.use('/', defaultRouter);
router.use('/signup', signupRouter);
router.use('/mypage', mypageRouter);
router.use('/refresh', refreshRouter);
module.exports = router;
