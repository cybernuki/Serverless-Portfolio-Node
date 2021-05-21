const {save} = require('./../../../../services/v1/portfolio/portfolioService');
const { validationResult } = require('express-validator');
portfolioController = { name: 'portfolioController' };

portfolioController.store = async (req, res) =>{
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			errors: errors.array()
		});
	}

	const portfolio = await save(req.body).catch(err => {
		console.log(err);
		return null;
	});

	if (!portfolio) {
		return res.status(400).json({ message: 'Failed to write portfolio by ID' });
	}

	return res.status(200).json({portfolio});
};

module.exports = portfolioController;