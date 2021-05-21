const AWS = require('aws-sdk');


let options = {};
if (process.env.IS_OFFLINE) {
	options = {
		region: 'localhost',
		endpoint: 'http://localhost:8000'
  	};
} 

if (process.env.JEST_WORKER_ID) {
	options = {
		region: 'localhost',
		endpoint: 'http://localhost:8000'
  	};
}

console.log(options);
const documentClient = new AWS.DynamoDB.DocumentClient(options);

module.exports = documentClient;