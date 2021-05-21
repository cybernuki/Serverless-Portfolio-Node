const {save} = require('./../../../../services/v1/portfolio/portfolioService');
portfolioController = { name: 'portfolioController' };

portfolioController.store = async (req, res) =>{
	const { id, name } = req.body;
	if (typeof id !== 'string') {
	  res.status(400).json({ error: '"id" must be a string' });
	  return;
	}
	if (typeof name !== 'string') {
	  res.status(400).json({ error: '"name" must be a string' });
	  return;
	}

	const portfolio = await save(id, name).catch(err => {
		console.log(err);
		return null;
	});

	if (!portfolio) {
		return res.status(400).json({ message: 'Failed to write portfolio by ID' });
	}

	return res.status(200).json({portfolio});
};

module.exports = portfolioController;