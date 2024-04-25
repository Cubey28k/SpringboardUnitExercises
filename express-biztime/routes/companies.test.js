//testing environment
process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');
// const { beforeEach } = require('node:test');

let testCompany;
beforeEach(async () => {
    const result = await db.query(
        `INSERT INTO companies (code, name, description) VALUES ('MEI', 'Methode Electronics', 'Semi Conductors') RETURNING code, name, description`
    );
    testCompany = result.rows[0];
});

afterEach(async () => {
    await db.query(`DELETE FROM companies`);
});

afterAll(async () => {
    await db.end();
});

describe('GET /companies/:code', () => {
    test('Get a specific company', async () => {
        const res = await request(app).get(`/companies/${testCompany.code}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ company: testCompany });
    })

    test('Get 404 for invalid company', async () => {
        const res= await request(app).get(`/companies/notacompany`)
        expect(res.statusCode).toBe(404);
    })
});

describe('POST /companies', () => {
    test('Add a specific company', async () => {
        const res = await request(app)
            .post('/companies/')
            .send({ code: 'twitter', name: 'Twitter', description: 'Social Media Platform'});
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ company: { code: 'twitter', name: 'Twitter', description: 'Social Media Platform' } });
    });
});

describe('PUT /companies/:code', () => {
    test('Update a specific company', async () => {
        const res = await request(app)
            .put(`/companies/${testCompany.code}`)
            .send({ name: 'Walmart', description: 'Big Box Retailer'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            company: { code: 'MEI', name: 'Walmart', description: 'Big Box Retailer'}
        });
    });

    test('Get 404 for invalid company code', async () => {
        const res = await request(app)
            .put('/companies/notacompany')
            .send({ name: 'Methode Electronics', description: 'Semi Conductors'});
        expect(res.statusCode).toBe(404);
    });
});

describe('DELETE /companies/:code', () => {
	test('Delete specific company', async () => {
		const res = await request(app).delete(`/companies/${testCompany.code}`);
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ msg: 'Deleted!' });
	});

	test('Get 404 for invalid company code', async () => {
		const res = await request(app).delete(`/companies/notacompany`);
		expect(res.statusCode).toBe(404);
	});
});