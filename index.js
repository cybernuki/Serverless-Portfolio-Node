const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes/api/route');

const app = express();

app.use(cors());
app.use(express.json());

app.use(apiRoutes);

app.get('/', function (req, res) {
	res.status(200).json('Test of deployment');
});


// catch 404 and forward to error handler
app.use(function (req, res) {
	return res.status(404).json({ 'message': 'not found' });
});


handler = serverless(app);
plain_app = app;
module.exports = { handler, plain_app };