const request = require('supertest');

const app = require('../../../index').plain_app;
describe('Get Endpoint', () => {
	it('should exists the endpoint', async () => {
		const res = await request(app)
			.get('/api/v1/portfolios/first');
		expect(res.statusCode).toEqual(200);
	});
});

describe('Patch Endpoint', () => {
	it('should exists the endpoint', async () => {
		const res = await request(app)
			.patch('/api/v1/portfolios/first');
		expect(res.statusCode).toEqual(200);
	});
});

describe('Post Endpoint', () => {

	it('should exists the endpoint', async () => {
		const res = await request(app)
			.post('/api/v1/portfolios');
		expect(res.statusCode).not.toEqual(404);
		expect(res.statusCode).not.toEqual(500);
	});

	it('check requested values', async () => {
		let res = await request(app)
			.post('/api/v1/portfolios')
			.send({name: 'john'})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
		;
		expect(res.statusCode).toEqual(400);

		res = await request(app)
			.post('/api/v1/portfolios')
			.send({id: 123})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
		;
		expect(res.statusCode).toEqual(400);
	});

	it('store correctly', async () => {
		let res = await request(app)
			.post('/api/v1/portfolios')
			.send({
				id: '1',
				names: 'Jhonatan Alexis',
				last_names: 'Arenas Bonilla',
				description: 'I am software engineer, I work basically on the backend side',
				title: 'Software Engineer',
				experience_summary: 'This incredible Technical Test',
				image_url: 'https://2.bp.blogspot.com/-MH_LCXgczh0/XLVFq8MySbI/AAAAAAAABiA/qo0UeEym1xQPdOoxUqH9t5rMcxNgXscXgCEwYBhgL/s1600/zemoga-logo-grey.png',
				twitter_user_name: 'ookanuki',
				twitter_user_id: '1147942967589703683',
			})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			;
		expect(res.statusCode).toEqual(200);
	});
});