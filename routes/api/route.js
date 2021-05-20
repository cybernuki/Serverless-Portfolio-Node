
const express = require('express');
const router = express.Router();
const v1 = require('./v1/route');


router.use('/api', v1);


module.exports = router;