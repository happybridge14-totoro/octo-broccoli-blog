const assert = require("assert");
const {encrypt, getInfoByToken} = require("../server/utils/JWT");
describe('JWT', function () {
    const userid = "aaa111";
    const expriedDate  = 1587097308251;
    const expectResult = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJhYWExMTEiLCJleHByaWVkRGF0ZSI6MTU4NzA5NzMwODI1MX0.7enbHq3hmB2yWopp6NhSUn1ESBVoRE7o1ntptzNOq2Y";
    describe('#encrypt()', function () {
        it("responds with matching records", function () {
            assert.equal(encrypt(userid, expriedDate), expectResult);
        });
    });
    describe("#getInfoByToken(), expired", function() {
        it("responds with matching records", function () {
            assert.deepStrictEqual(getInfoByToken(expectResult), null);
        });
    });
    describe("#getInfoByToken(), not expired", function() {
        const userid = "aaa111";
        const expriedDate  = 12688098308251;
        const expectResult = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJhYWExMTEiLCJleHByaWVkRGF0ZSI6MTI2ODgwOTgzMDgyNTF9.3DhNPE2XHxtGrWq7wwadktikoErCWEjMrO7fNYCipVE";
        it("responds with matching records", function () {
            assert.deepStrictEqual(getInfoByToken(expectResult, userid), {userid, expriedDate});
        });
    });
});