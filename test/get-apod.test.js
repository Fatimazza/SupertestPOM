const assert = require('chai').expect;

const page = require('../page/get-apod.api');

let payload = {
    'start_date': '2023-01-01',
    'end_date': '2023-02-28',
    'api_key': process.env.API_KEY
};

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
        const response = await page.getApod(payload);
        assert(response.status).to.equal(200);
    });

    it(`@negative ${testCases.negative.invalidParams}`, async () => {
        payload.end_date = '2023-db-23';
        const response = await page.getApod(payload);
        assert(response.status).to.equal(400);
    });
});
