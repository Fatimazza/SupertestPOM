const assert = require('chai').expect;

const testCases = {
    describe: 'As a User, I want to make sure Value is correct',
    positive: {
        validParams: 'Verify True equal True'
    },
    negative: {
        invalidParams: 'Verify False equal False'
    }
};

describe(`@get ${testCases.describe}`, () => {
    it(`@positive ${testCases.positive.validParams}`, async () => {
        assert(true).to.equal(true);
    });

    it(`@negative ${testCases.negative.invalidParams}`, async () => {
        assert(false).to.equal(false);
    });
});
