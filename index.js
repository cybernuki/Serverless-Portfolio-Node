const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const apiRoutes = require('./routes/api/route');
app.use(apiRoutes);

app.get('/', function (req, res) {
	res.status(200).json('Test of deployment');
});

// Get User endpoint
app.get('/portfolio/:portfolioId', function (req, res) {
	const params = {
	  TableName: PORTFOLIO_TABLE,
	  Key: {
			portfolioId: req.params.portfolioId,
	  },
	};
  
	dynamoDb.get(params, (error, result) => {
	  if (error) {
			console.log(error);
			res.status(400).json({ error: 'Could not get user' });
	  }
	  if (result.Item) {
			const {portfolioId, name} = result.Item;
			res.json({ portfolioId, name });
	  } else {
			res.status(404).json({ error: 'User not found' });
	  }
	});
});

// catch 404 and forward to error handler
app.use(function (req, res) {
	return res.status(404).json({ 'message': 'not found' });
});


handler = serverless(app);
plain_app = app;
module.exports = { handler, plain_app };