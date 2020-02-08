const generatSessionId = require("../public/utils/uuid-generator");
const assert = require("assert").strict;

describe("UUID genderator", () => {
    describe("#uuidGenerator()", () => {
        it("test1", () => {
            //  Only available after v13.8.0
            // assert.match(generatSessionId(), /[0-9a-z]{13}/);
            assert.ok(/[0-9a-z]{13}/.test(generatSessionId()));
        });
        it("test2", () => {
            assert.ok(/[0-9a-z]{13}/.test(generatSessionId()));
        });
        it("test3", () => {
            assert.ok(/[0-9a-z]{13}/.test(generatSessionId()));
        });
    });
});