const express = require('express');
const router = express.Router();

/** GET portfolio. 
 * This route returns all information of the first portfolio saved on database
 * response's body:
 * {
 * //TODO check response resource
 *  status: 'ok',
 *  data: [aspirants]
 * }
*/
router.get('/portfolio', function (req, res) {
	res.status(200).json('to implement');
});

/** GET portfolio. 
 * This route allows to modifed the first portfolio saved on database
 * //TODO check response resource
 * //TODO check request validation
 * response's body:
 * {
 *  status: 'ok',
 *  data: [aspirants]
 * }
*/
router.patch('/portfolio/', function (req, res) {
	res.status(200).json('to implement');
});

module.exports = router;