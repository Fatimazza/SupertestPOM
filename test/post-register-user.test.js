const assert = require('chai').expect;

const testCases = {
    describe: 'As a User, I want to register to Reqres.in',
    positive: {
        validParams: 'Verify new user successfully registered'
    }
};

describe(`@get ${testCases.describe}`, () => {
    it(`@positive ${testCases.positive.validParams}`, async () => {
        assert(true).to.equal(true);
    });
});