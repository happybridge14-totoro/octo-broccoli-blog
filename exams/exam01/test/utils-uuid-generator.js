const generatSessionId = require("../src/utils/uuid-generator");
const assert = require("assert").strict;

describe("UUID genderator", () => {
    const ids = new Set();
    describe("#uuidGenerator()", () => {
        beforeEach(() => {
            for (let i = 0; i < 1000; i++) {
                ids.add(generatSessionId());
            }
        });
        it("test1, match regex /[0-9a-z]{13}/", () => {
            //  Only available after v13.8.0
            // assert.match(generatSessionId(), /[0-9a-z]{13}/);
            const id = generatSessionId();
            assert.ok(/[0-9a-z]{13}/.test(id) && !ids.has(id));
        });
        it("test2, match regex /[0-9a-z]{13}/", () => {
            const id = generatSessionId();
            assert.ok(/[0-9a-z]{13}/.test(id) && !ids.has(id));
        });
        it("test3, match regex /[0-9a-z]{13}/", () => {
            const id = generatSessionId();
            assert.ok(/[0-9a-z]{13}/.test(id) && !ids.has(id));
        });
    });
});