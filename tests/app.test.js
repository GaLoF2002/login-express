const request = require('supertest');
const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

test('Debe responder con status OK', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
});
