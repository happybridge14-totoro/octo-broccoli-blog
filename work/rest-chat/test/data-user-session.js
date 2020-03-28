const data = require("../src/data/user-session");
const assert = require("assert");
describe('data.createOrGetUserInfo', function () {
    const userName = "test1";
    const newUserId = 1;
    const newUserInfo = {
        userId: newUserId,
        userName
    };
    describe('#newUser', function () {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.createOrGetUserInfo(data.INVALID_USER_ID, userName), newUserInfo);
        });
    });
    describe("#existing user", function() {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.createOrGetUserInfo(newUserId, userName), newUserInfo);
        });
    });
});
describe('data.getUserIdByName', function() {
    const userName = "test3";
    let newUserId = 1;
    before(() => {
        newUserId = data.createOrGetUserInfo(-1, userName).userId;
    });
    describe("#existing user", function() {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.getUserIdByName(userName), newUserId);
        });
    });
    describe("#none existing user", function() {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.getUserIdByName("test"), data.INVALID_USER_ID);
        });
    });
});
describe('data.getUserIdBySessionId', function() {
    const userId = 1;
    describe("#new sessionid", function() {
        it("respond math regex /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/", function () {
            assert.ok(/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/.test(data.createSessionByUserId(userId)));
        });
    });
});
describe('data.getUserIdBySessionId', function() {
    const userId = 1;
    let sessionId = -1;
    before(() => {
        sessionId = data.createSessionByUserId(userId);
    });
    describe("#check sessionId", function() {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.getUserIdBySessionId(sessionId), userId);
        });
    });
});
describe('data.deleteSessionById', function() {
    const userId = 1;
    let sessionId = -1;
    before(() => {
        sessionId = data.createSessionByUserId(userId);
    });
    describe("#check sessionId", function() {
        it("responds with matching records", function () {
            data.deleteSessionById(sessionId);
            assert.deepStrictEqual(data.getUserIdBySessionId(sessionId), data.INVALID_USER_ID);
        });
    });
});