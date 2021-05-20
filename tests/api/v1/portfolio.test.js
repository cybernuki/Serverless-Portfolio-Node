const request = require('supertest');

const app = require('../../../index').plain_app;
describe('Get Endpoint', () => {
	it('should exists the endpoint', async () => {
		const res = await request(app)
			.get('/api/v1/portfolio');
		expect(res.statusCode).toEqual(200);
	});
});

describe('Patch Endpoint', () => {
	it('should exists the endpoint', async () => {
		const res = await request(app)
			.patch('/api/v1/portfolio');
		expect(res.statusCode).toEqual(200);
	});
});