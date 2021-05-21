const documentClient = require('../../../database/Dynamo');
portfolioService = { name: 'portfolioService' };


portfolioService.save = async (data) => {
	const {id, names, last_names, description, title, experience_summary, image_url, twitter_user_name, twitter_user_id} = data;
	const params = {
		TableName: 'portfolios-table',
		Item: {id, names, last_names, description, title, experience_summary, image_url, twitter_user_name, twitter_user_id},
	  };
	
	const res = await documentClient.put(params).promise();

	if (!res) {
		throw Error(`There was an error inserting ID of ${id} in table portfolios-table`);
	};

	return data;
};

portfolioService.first = async () => {
	const params = {
		TableName: 'portfolios-table',
		Key: {
			id: '1',
		},
	  };
	
	const res = await documentClient.get(params).promise();

	if (!res) {
		throw Error(`There was an error getting ID of ${id} in table portfolios-table`);
	};
	if (!res.Item) {
		return {};
	}

	return {id, names, last_names, description, title, experience_summary, image_url, twitter_user_name, twitter_user_id} = res.Item;
};

module.exports = portfolioService;