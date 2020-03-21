const data = require("../src/data/message");
const assert = require("assert");
const messages = [];
describe('data.addNewMessage', function () {
    describe('#firstMessage', function () {
        it("responds with matching records", function () {
            const userName = "tina";
            const message = "hello";
            const firstMessage = {
                messageId: 0,
                message, 
                userName
            };
            messages.push(firstMessage);
            assert.deepStrictEqual(data.addNewMessage(userName, message), firstMessage);
        });
    });
    describe('#secondMessage', function () {
        it("responds with matching records", function () {
            const userName = "tina";
            const message = "hello";
            const secondMessage = {
                messageId: 1,
                message, 
                userName
            };
            messages.push(secondMessage);
            assert.deepStrictEqual(data.addNewMessage(userName, message), secondMessage);
        });
    })
});
describe('data.getMessages', function () {
    beforeEach(() => {
        let id = messages.length;
        const userName = "tina";
        const message = "hello";
        const newMessage = {
            messageId: id++,
            message, 
            userName
        };
        messages.push(newMessage);
        data.addNewMessage(userName, message);
    });
    describe('#firstMessage', function () {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.getMessages(), messages);
        });
    });
    describe('#secondMessage', function () {
        it("responds with matching records", function () {
            assert.deepStrictEqual(data.getMessages(), messages);
        });
    });
});
describe('data.getPartialMessages', function () {
    describe('#lastId is 1', function () {
        it("responds with matching records", function () {
            const lastId = 1;
            assert.deepStrictEqual(data.getPartialMessages(lastId), messages.slice(lastId + 1));
        });
    });
    describe('#secondMessage', function () {
        it("responds with matching records", function () {
            const lastId = 4;
            assert.deepStrictEqual(data.getPartialMessages(lastId), messages.slice(lastId + 1));
        });
    });
});