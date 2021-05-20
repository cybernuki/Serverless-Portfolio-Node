const express = require('express');
const router = express.Router();
const portfolioRouter = require('./portfolio');


router.use('/v1', portfolioRouter);


module.exports = router;