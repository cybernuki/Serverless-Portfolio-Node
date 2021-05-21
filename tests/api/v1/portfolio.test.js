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

describe('Post Endpoint', () => {

	it('should exists the endpoint', async () => {
		const res = await request(app)
			.post('/api/v1/portfolio');
		expect(res.statusCode).not.toEqual(404);
		expect(res.statusCode).not.toEqual(500);
	});

	it('check requested values', async () => {
		let res = await request(app)
			.post('/api/v1/portfolio')
			.send({name: 'john'})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
		;
		expect(res.statusCode).toEqual(400);

		res = await request(app)
			.post('/api/v1/portfolio')
			.send({id: 123})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
		;
		expect(res.statusCode).toEqual(400);
	});

	it('store correctly', async () => {
		let res = await request(app)
			.post('/api/v1/portfolio')
			.send({id: '1', name: 'jhonatan'})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			;
		expect(res.statusCode).toEqual(200);
	});
});