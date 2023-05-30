const { expect } = require('chai');
const assert = require("chai").expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const page = require('../page/get-list-users.api');
const schema = require('../schema/get-list-users.schema.js')

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
        assert(response.status).to.equal(200);

        expect(response.body)
            .to.be.an("object")
            .to.include.keys("data", "support")
            .and.to.have.nested.property("data")
            .that.is.an("array");

        response.body.data.forEach((element) => {
            expect(element)
                .to.have.all.keys(['id', 'email', 'avatar', 'first_name', 'last_name']);
        });

        expect(response.body).to.be.jsonSchema(schema.LIST_USERS_SCHEMA);
    });
});