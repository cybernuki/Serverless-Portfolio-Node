const { body } = require('express-validator');

validator = {};
validator.store_validations = [
	body('id').isString(),
	body('first_names').isString().isLength({max: 25}),
	body('last_names').isString().isLength({max: 25}),
	body('description').isString().isLength({max: 255}),
	body('title').isString().isLength({max: 25}),
	body('experience_summary').isString().isLength({max: 255}),
	body('image_url').isURL(),
	body('twitter_user_name').isString().isLength({max: 25}),
	body('twitter_user_id').isString().isLength({max: 25}),
];

validator.update_validations = [
	body('id').isString().optional(),
	body('first_names').isString().isLength({max: 25}).optional(),
	body('last_names').isString().isLength({max: 25}).optional(),
	body('description').isString().isLength({max: 255}).optional(),
	body('title').isString().isLength({max: 25}).optional(),
	body('experience_summary').isString().isLength({max: 255}).optional(),
	body('image_url').isURL().optional(),
	body('twitter_user_name').isString().isLength({max: 25}).optional(),
	body('twitter_user_id').isString().isLength({max: 25}).optional(),
];


module.exports = validator;