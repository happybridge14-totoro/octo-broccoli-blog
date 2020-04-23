const assert = require("assert");
const {encrypt, getInfoByToken} = require("../server/utils/JWT");
describe('JWT', function () {
    const userid = "aaa111";
    const expiredDate  = 1587097308251;
    const expectResult = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJhYWExMTEiLCJleHBpcmVkRGF0ZSI6MTU4NzA5NzMwODI1MX0.6wUqmxB0NA63YW8TlYEHCqi36MkCCbiFdovQhvBPmHM";
    describe('#encrypt()', function () {
        it("responds with matching records", function () {
            assert.equal(encrypt(userid, expiredDate), expectResult);
        });
    });
    describe("#getInfoByToken(), expired", function() {
        it("responds with matching records", function () {
            assert.deepStrictEqual(getInfoByToken(expectResult), null);
        });
    });
    describe("#getInfoByToken(), not expired", function() {
        const notExpiredDate  = 12688098308251;
        const expectResult = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJhYWExMTEiLCJleHBpcmVkRGF0ZSI6MTI2ODgwOTgzMDgyNTF9.1_kJsbsP6d0qXXkzw9cHSwJ7n5b8uAkkbKFEz8RDQtA";
        it("responds with matching records", function () {
            assert.deepStrictEqual(getInfoByToken(expectResult, userid), {userid, expiredDate:notExpiredDate});
        });
    });
});