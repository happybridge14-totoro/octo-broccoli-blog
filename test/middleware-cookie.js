const parseCookie = require("../server/middleware/cookie");
const assert = require("assert");
describe('CookieParser', function () {
    describe('#parse("")', function () {
        it("responds with matching records", function () {
            const req = {
                headers: {
                    cookie: ""
                }
            };
            const expectedReq = {
                headers: {
                    cookie: ""
                },
                cookie: {
                }
            };
            parseCookie(req, {}, () => {
                assert.deepStrictEqual(req, expectedReq);
            });
        });
    });
    describe('#parse("test=a%20test")', function () {
        it("responds with matching records", function () {
            const req = {
                headers: {
                    cookie: "test=a%20test"
                }
            };
            const expectedReq = {
                headers: {
                    cookie: "test=a%20test"
                },
                cookie: {
                    test: "a%20test"
                }
            };
            parseCookie(req, {}, () => {
                assert.deepStrictEqual(req, expectedReq);
            });
        });
    });
    describe('#parse(session-id=a9gv9ff1nsd4)', function () {
        it("responds with matching records", function () {
            const req = {
                headers: {
                    cookie: "session-id=a9gv9ff1nsdf4"
                }
            };
            const expectedReq = {
                headers: {
                    cookie: "session-id=a9gv9ff1nsdf4"
                },
                cookie: {
                    "session-id": "a9gv9ff1nsdf4"
                }
            };
            parseCookie(req, {}, () => {
                assert.deepStrictEqual(req, expectedReq);
            });
        });
    });
});