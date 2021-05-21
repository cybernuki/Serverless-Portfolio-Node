const {save, first, update_first} = require('./../../../../services/v1/portfolio/portfolioService');
const { validationResult } = require('express-validator');
portfolioController = { name: 'portfolioController' };

portfolioController.store_service = async (req, res) =>{
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

portfolioController.get_first_service = async (req, res) =>{

	const portfolio = await first().catch(err => {
		console.log(err);
		return null;
	});


	return res.status(200).json({portfolio});
};

portfolioController.update_first_service = async (req, res) =>{
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			errors: errors.array()
		});
	}

	Object.entries(req.body).forEach(async(element) => {
		if (element[1] !== undefined)
		{
			await update_first(element[0], element[1]).catch(err => {
				console.log(err);
				return null;
			});
		}
	});

	const portfolio = await first().catch(err => {
		console.log(err);
		return null;
	});

	return res.status(200).json({portfolio});
};

module.exports = portfolioController;