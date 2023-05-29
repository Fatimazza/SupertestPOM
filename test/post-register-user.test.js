const assert = require('chai').expect;

const page = require('../page/post-register-user.api.js');

let payload = {
    'email': 'eve.holt@reqres.in',
    'password': 'pistol'
};

const testCases = {
    describe: 'As a User, I want to register to Reqres.in',
    positive: {
        validParams: 'Verify new user successfully registered'
    }
};

describe(`@get ${testCases.describe}`, () => {
    it(`@positive ${testCases.positive.validParams}`, async () => {
        const response = await page.postRegisterUser(payload);
        assert(response.status).to.equal(200);
    });
});