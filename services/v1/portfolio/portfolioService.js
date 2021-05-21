const documentClient = require('../../../database/Dynamo');
portfolioService = { name: 'portfolioService' };


portfolioService.save = async (data) => {
	const {id, first_names, last_names, description, title, experience_summary, image_url, twitter_user_name, twitter_user_id} = data;
	const params = {
		TableName: 'portfolios-table',
		Item: {id, first_names, last_names, description, title, experience_summary, image_url, twitter_user_name, twitter_user_id},
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

	return {id, first_names, last_names, description, title, experience_summary, image_url, twitter_user_name, twitter_user_id} = res.Item;
};

portfolioService.update_first = async (updateKey, updateValue) => {
	const params = {
		TableName: 'portfolios-table',
		Key: {
			id: '1',
		},
		UpdateExpression: `set ${updateKey} = :updateValue`,
		ExpressionAttributeValues: {
			':updateValue': updateValue,
		},
	  };
	
	const res = await documentClient.update(params).promise();

	if (!res) {
		throw Error(`There was an error getting ID of ${id} in table portfolios-table`);
	};
	if (!res.Item) {
		return {};
	}

	return {id, first_names, last_names, description, title, experience_summary, image_url, twitter_user_name, twitter_user_id} = res.Item;
};

module.exports = portfolioService;