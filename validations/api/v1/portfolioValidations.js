const { body } = require('express-validator');

validator = [
	body('id').isString(),
	body('names').isString().isLength({max: 25}),
	body('last_names').isString().isLength({max: 25}),
	body('description').isString().isLength({max: 255}),
	body('title').isString().isLength({max: 25}),
	body('experience_summary').isString().isLength({max: 255}),
	body('image_url').isURL(),
	body('twitter_user_name').isString().isLength({max: 25}),
	body('twitter_user_id').isString().isLength({max: 25}),
];


module.exports = validator;