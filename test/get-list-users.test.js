const assert = require('chai').expect;

const page = require('../page/get-list-users.api');

const testCases = {
    describe: 'As a User, I want to see the list of users',
    positive: {
        validParams: 'Verify the data of users displayed'
    }
};

let payload = {
    'page': '2'
}

describe(`@get ${testCases.describe}`, () => {
    it(`@positive ${testCases.positive.validParams}`, async () => {
        const response = await page.getListUsers(payload);
        assert(response.status).to.be.equal(200);
    });
});