const request = require('supertest');

const app = require('../../../index').plain_app;
describe('Post Endpoints', () => {
	it('should create a new post', async () => {
		const res = await request(app)
			.get('/api/v1/portfolio');
		expect(res.statusCode).toEqual(200);
	});
});