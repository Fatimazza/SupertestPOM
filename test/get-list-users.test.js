const assert = require('chai').expect;

const testCases = {
    describe: 'As a User, I want to see the list of users',
    positive: {
        validParams: 'Verify the data of users displayed'
    }
};

describe(`@get ${testCases.describe}`, () => {
    it(`@positive ${testCases.positive.validParams}`, async () => {
        assert(true).to.equal(true);
    });
});