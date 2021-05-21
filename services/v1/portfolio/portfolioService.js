const documentClient = require('../../../database/Dynamo');
portfolioService = { name: 'portfolioService' };


portfolioService.save = async (id, name) => {
	const params = {
		TableName: 'portfolios-table',
		Item: {
			  id: id,
			  name: name,
		},
	  };
	
	const res = await documentClient.put(params).promise();

	if (!res) {
		throw Error(`There was an error inserting ID of ${id} in table portfolios-table`);
	};

	return {id, name};
};

module.exports = portfolioService;