const uuid = require("./utils/uuid-generator");
let userID = 1;
const user = {};
const userNameIdMap = new Map();
const sessions = {};
const INVALID_USER_ID = -1;
let itemID = 1;

const getNewUserId = () => {
    return userID++;
};
const getNewItemId = () => {
    return itemID++;
};
const getUserIdByName = (name) => {
    return userNameIdMap.has(name) ? userNameIdMap.get(name) : INVALID_USER_ID;
};
const createOrGetUserInfo = (userID, userName) => {
    if (user[userID]) {
        return user[userID];
    } else {
        if (userName) {
            const newID = getNewUserId();
            const newUserInfo = {
                userId: newID,
                userName,
                items: {},
                itemNames: new Set()
            };
            user[newID] = newUserInfo;
            userNameIdMap.set(userName, newID);
            return newUserInfo;
        } else {
            return null;
        }
    }
};
const getUserIdBySessionId = (sessionId) => {
    return sessions[sessionId] || INVALID_USER_ID;
};
const createSessionByUserId = (userId) => {
    const sessionId = uuid();
    sessions[sessionId] = userId;
    return sessionId;
};
const deleteSessionById = (sessionId) => {
    delete sessions[sessionId];
};
const addItem = (userId, itemName, itemQuantity) => {
    const ret = {
        validId: false,
        validItem: false,
        itemId: -1
    };
    const userInfo = user[userId];
    if (userInfo) {
        ret.validId = true;
        if (!userInfo.itemNames.has(itemName)) {
            const newItemId = getNewItemId();
            userInfo.items[newItemId] = {
                id: newItemId,
                name: itemName,
                quantity: itemQuantity
            };
            userInfo.itemNames.add(itemName);
            ret.validItem = true;
            ret.itemId = newItemId;
        }
    }
    return ret;
};
const updateItem = (userId, itemId, itemQuantity) => {
    const ret = {
        validUserId: false,
        validItemId: false
    };
    const userInfo = user[userId];
    if (userInfo) {
        ret.validUserId = true;
        const item = userInfo.items[itemId];
        if (item) {
            ret.validItemId = true;
            userInfo.items[itemId].quantity = itemQuantity;
        }
    }
    return ret;
};
const deleteItem = (userId, itemId) => {
    const userInfo = user[userId];
    if (userInfo) {
        const item = userInfo.items[itemId];
        if (item) {
            userInfo.itemNames.delete(item.name);
            delete userInfo.items[itemId];
        }
    }
};

module.exports = {INVALID_USER_ID, getUserIdByName, createOrGetUserInfo, getUserIdBySessionId, createSessionByUserId, deleteSessionById, addItem, updateItem, deleteItem};