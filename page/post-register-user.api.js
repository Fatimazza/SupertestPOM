const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.BASE_URL_REQRES);

const postRegisterUser = (payload) =>
    api
        .post('/register')
        .set('Content-Type', 'application/json')
        .send(payload);

module.exports = {
    postRegisterUser
}