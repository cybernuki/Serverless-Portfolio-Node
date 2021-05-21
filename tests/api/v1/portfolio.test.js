const request = require('supertest');
const portfolioService = require('../../../services/v1/portfolio/portfolioService')

const app = require('../../../index').plain_app;
describe('Get First Endpoint', () => {
	it('should exists the endpoint', async () => {
		const res = await request(app)
			.get('/api/v1/portfolios/first');
		expect(res.statusCode).toEqual(200);
	});

	it('should retrive information of the first portfolio', async () => {
		await portfolioService.save({
			id: '1',
			first_names: 'Jhonatan Alexis',
			last_names: 'Arenas Bonilla',
			description: 'I am software engineer, I work basically on the backend side',
			title: 'Software Engineer',
			experience_summary: 'This incredible Technical Test',
			image_url: 'https://2.bp.blogspot.com/-MH_LCXgczh0/XLVFq8MySbI/AAAAAAAABiA/qo0UeEym1xQPdOoxUqH9t5rMcxNgXscXgCEwYBhgL/s1600/zemoga-logo-grey.png',
			twitter_user_name: 'ookanuki',
			twitter_user_id: '1147942967589703683',
		});

		const res = await request(app)
			.get('/api/v1/portfolios/first');
		expect(res.statusCode).toEqual(200);
		expect(res.body).toHaveProperty('portfolio.id');
		expect(res.body).toHaveProperty('portfolio.first_names');
		expect(res.body).toHaveProperty('portfolio.title');
		expect(res.body).toHaveProperty('portfolio.description');
		expect(res.body).toHaveProperty('portfolio.image_url');
		expect(res.body).toHaveProperty('portfolio.twitter_user_id');
		expect(res.body).toHaveProperty('portfolio.twitter_user_name');
	});
});

describe('Patch Endpoint', () => {
	it('should exists the endpoint', async () => {
		const res = await request(app)
			.patch('/api/v1/portfolios/first');
		expect(res.statusCode).toEqual(200);
	});

	it('store correctly', async () => {
		await portfolioService.save({
			id: '1',
			first_names: 'Jhonatan Alexis',
			last_names: 'Arenas Bonilla',
			description: 'I am software engineer, I work basically on the backend side',
			title: 'Software Engineer',
			experience_summary: 'This incredible Technical Test',
			image_url: 'https://2.bp.blogspot.com/-MH_LCXgczh0/XLVFq8MySbI/AAAAAAAABiA/qo0UeEym1xQPdOoxUqH9t5rMcxNgXscXgCEwYBhgL/s1600/zemoga-logo-grey.png',
			twitter_user_name: 'ookanuki',
			twitter_user_id: '1147942967589703683',
		});

		let res = await request(app)
			.post('/api/v1/portfolios')
			.send({
				id: '1',
				first_names: 'Jhonatan',
				last_names: 'Arenas',
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
		expect(res.body).toHaveProperty('portfolio.id');
		expect(res.body).toHaveProperty('portfolio.first_names');
		expect(res.body).toHaveProperty('portfolio.title');
		expect(res.body).toHaveProperty('portfolio.description');
		expect(res.body).toHaveProperty('portfolio.image_url');
		expect(res.body).toHaveProperty('portfolio.twitter_user_id');
		expect(res.body).toHaveProperty('portfolio.twitter_user_name');
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
				first_names: 'Jhonatan Alexis',
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