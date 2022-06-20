const app = require('../index')
const request = require('supertest')

describe('GET APIs', () => {
    test('It should return product list', async () => {
        const response = await request(app).get('/getProducts')
        expect(response.body.length).toBe(0)
        expect(response.body[0]).toHaveProperty('abc')
        expect(response.statusCode).toBe(200)
    })
})

describe('POST APIs', () => {
    test('It should return product list', async () => {
        const response = await request(app).post('/product/create').send({
            title: "Name",
            price: '200'
        })
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
            title: "Name",
            price: '200'
        })
    })
})