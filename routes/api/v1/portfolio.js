const express = require('express');
const validator = require('./../../../validations/api/v1/portfolioValidations');
const {store, first} = require('../../../controller/api/v1/portfolio/portfolioController');
const router = express.Router();

/** GET portfolio. 
 * This route returns all information of the first portfolio saved on database
 * response's body:
 * {
 *  status: 'ok',
 *  data: [
 * 		id,
 * 		names,
 * 		last_names,
 * 		description,
 * 		image_url,
 * 		title,
 * 		experience_summary,
 * 		twitter_user_name,
 * 		twitter_user_id,
 * ]
 * }
*/
router.get('/portfolios/first', first);

/** GET portfolio. 
 * This route allows to modifed the first portfolio saved on database
 * response's body:
 * {
 *  status: 'ok',
 *  data: [
 * 		id,
 * 		names,
 * 		last_names,
 * 		description,
 * 		image_url,
 * 		title,
 * 		experience_summary,
 * 		twitter_user_name,
 * 		twitter_user_id,
 * ]
 * }
*/
router.patch('/portfolios/first', function (req, res) {
	res.status(200).json('to implement');
});

/** POST portfolio. 
 * This route allows to create a portfolio on database
 * response's body:
 * {
 *  status: 'ok',
 *  data: [
 * 		id,
 * 		names,
 * 		last_names,
 * 		description,
 * 		image_url,
 * 		title,
 * 		experience_summary,
 * 		twitter_user_name,
 * 		twitter_user_id,
 * ]
 * }
*/
router.post('/portfolios', validator, store);

module.exports = router;