const { describe, expect, test } = require('@jest/globals')
const request = require('supertest')
const app = require('../dist/app')
const application = app.default.callback()

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });

    test('Ping should return 200', async () => {
        const response  = await request(application)
            .get('/')
        expect(response.status).toEqual(200)
    })
});


