const data = require("../src/data");
const assert = require("assert");
describe('data.createOrGetUserInfo', function () {
    const userName = "test1";
    const newUserId = 1;
    const newUserInfo = {
        userId: newUserId,
        userName,
        items: {},
        itemNames: new Set()
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
describe('data.addItem', function() {
    let userId = data.INVALID_USER_ID;
    const itemName = "test";
    const userName = "tester";
    const quantity = 4;
    const itemId = 1;
    before(() => {
        userId = data.createOrGetUserInfo(data.INVALID_USER_ID, userName).userId;
    });
    describe("#invalid userid", function() {
        it("responds with matching records", function () {
            const ret = {
                validId: false,
                validItem: false,
                itemId: -1
            };
            assert.deepStrictEqual(data.addItem(data.INVALID_USER_ID, "", 0), ret);
        });
    });
    describe("#successfully added", function() {
        it("responds with matching records", function () {
            const ret = {
                validId: true,
                validItem: true,
                itemId: itemId
            };
            assert.deepStrictEqual(data.addItem(userId, itemName, quantity), ret);
        });
        it("check value", function() {
            const userInfo = data.createOrGetUserInfo(userId);
            const ret = {
                id: itemId,
                name: itemName,
                quantity: quantity
            };
            assert.deepStrictEqual(userInfo.items[itemId], ret);
        });
        it("check itemNameSet", function () {
            const userInfo = data.createOrGetUserInfo(userId);
            assert.ok(userInfo.itemNames.has(itemName));
        });
    });
    describe("#dulplicated item name", function() {
        it("responds with matching records", function () {
            const ret = {
                validId: true,
                validItem: false,
                itemId: -1
            };
            assert.deepStrictEqual(data.addItem(userId, itemName, 4), ret);
        });
    });
});
describe('data.updateItem', function() {
    let userId = data.INVALID_USER_ID;
    const itemName = "test";
    const userName = "tester";
    const quantity = 5;
    const target_quantity = 6;
    const invalid_item_id = -1;
    let itemId = invalid_item_id;
    before(() => {
        userId = data.createOrGetUserInfo(data.INVALID_USER_ID, userName).userId;
        itemId = data.addItem(userId, itemName, quantity).itemId;
    });
    describe("#invalid userid", function() {
        it("responds with matching records", function () {
            const ret = {
                validUserId: false,
                validItemId: false
            };
            assert.deepStrictEqual(data.updateItem(data.INVALID_USER_ID, "", target_quantity), ret);
        });
    });
    describe("#invalid item id", function() {
        it("responds with matching records", function () {
            const ret = {
                validUserId: true,
                validItemId: false
            };
            assert.deepStrictEqual(data.updateItem(userId, invalid_item_id, target_quantity), ret);
        });
    });
    describe("#successfully updated", function() {
        it("responds with matching records", function () {
            const ret = {
                validUserId: true,
                validItemId: true
            };
            assert.deepStrictEqual(data.updateItem(userId, itemId, target_quantity), ret);
        });
        it("value check matching", function() {
            const userInfo = data.createOrGetUserInfo(userId);
            const ret = {
                id: itemId,
                name: itemName,
                quantity: target_quantity
            };
            assert.deepStrictEqual(userInfo.items[itemId], ret);
        });
    });
});
describe('data.deleteItem', function() {
    let userId = data.INVALID_USER_ID;
    const itemName = "test";
    const userName = "tester";
    const quantity = 5;
    const invalid_item_id = -1;
    let itemId = invalid_item_id;
    let targetItem = null;
    let items = null;
    before(() => {
        userId = data.createOrGetUserInfo(data.INVALID_USER_ID, userName).userId;
        itemId = data.addItem(userId, itemName, quantity).itemId;
        userInfo = data.createOrGetUserInfo(userId);
        items = userInfo.items;
        targetItem = items[itemId];
    });
    describe("#invalid userid", function() {
        it("responds with matching records", function () {
            data.deleteItem(data.INVALID_USER_ID, itemId);
            assert.deepStrictEqual(items[itemId], targetItem);
        });
    });
    describe("#invalid itemid", function() {
        it("responds with matching records", function () {
            data.deleteItem(userId, invalid_item_id);
            assert.deepStrictEqual(items[itemId], targetItem);
        });
    });
    describe("#sucessfully deleted", function() {
        before(() => {
            data.deleteItem(userId, itemId);
        });
        it("check item", function () {
            assert.ifError(items[itemId]);
        });
        it("check itemNameSet", function () {
            assert.ok(!userInfo.itemNames.has(itemName));
        });
    });
});