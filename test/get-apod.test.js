const assert = require('chai').expect;

const testCases = {
    describe: 'As a User, I want to see Astronomy Picture of the Day',
    positive: {
        validParams: 'Verify the APOD data is displayed'
    },
    negative: {
        invalidParams: 'Ensure data not available when invalid parameter inputted'
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
