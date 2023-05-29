const assert = require('chai').expect;

const page = require('../page/post-register-user.api.js');
const data = require('../data/user-data.js');

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
        const response = await page.postRegisterUser(data.REGISTER_USER_DATA);
        assert(response.status).to.equal(200);
    });
});