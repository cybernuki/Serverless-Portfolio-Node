const express = require('express');
const {store_validations, update_validations} = require('./../../../validations/api/v1/portfolioValidations');
const {store_service, get_first_service, update_first_service} = require('../../../controller/api/v1/portfolio/portfolioController');
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
router.get('/portfolios/first', get_first_service);

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
router.patch('/portfolios/first', update_validations, update_first_service);

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
router.post('/portfolios', store_validations, store_service);

module.exports = router;