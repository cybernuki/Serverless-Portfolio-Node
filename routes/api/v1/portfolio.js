const express = require('express');
const router = express.Router();

/** GET portfolio. 
 * This route returns all aspirants saved in the db
 * response's body:
 * {
 *  status: 'ok',
 *  data: [aspirants]
 * }
*/
router.get('/portfolio', function (req, res) {
	res.status(200).json('to implement');
});

module.exports = router;