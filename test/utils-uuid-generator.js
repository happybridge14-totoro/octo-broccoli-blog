const generatUUID = require("../server/utils/uuid-generator");
const assert = require("assert").strict;

describe("UUID genderator", () => {
    const ids = new Set();
    const rules = /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/;
    describe("#uuidGenerator()", () => {
        beforeEach(() => {
            for (let i = 0; i < 1000; i++) {
                ids.add(generatUUID());
            }
        });
        it("test1, match rules/", () => {
            //  Only available after v13.8.0
            const id = generatUUID();
            assert.ok(rules.test(id) && !ids.has(id));
        });
        it("test2, match rules/", () => {
            const id = generatUUID();
            assert.ok(rules.test(id) && !ids.has(id));
        });
        it("test3, match rules/", () => {
            const id = generatUUID();
            assert.ok(rules.test(id) && !ids.has(id));
        });
    });
});