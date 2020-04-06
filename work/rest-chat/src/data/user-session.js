const uuid = require("../utils/uuid-generator");
let userID = 1;
const user = {};
const userNameIdMap = new Map();
const sessions = {};

const INVALID_USER_ID = -1;
let timestamp = 0;
const getNewUserId = () => {
    return userID++;
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
                userName
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
    timestamp = Date.now();
    return sessionId;
};
const deleteSessionById = (sessionId) => {
    if (sessions[sessionId]) {
        delete sessions[sessionId];
        timestamp = Date.now();
        return true;
    }
    return false;
};
const getActiveUsers = () => {
    const users =  Object.values(sessions).map((userId) => {
        return user[userId].userName;
    });
    return {
        timestamp,
        users
    };
};

module.exports = {INVALID_USER_ID, getUserIdByName, createOrGetUserInfo, getUserIdBySessionId, createSessionByUserId, deleteSessionById, getActiveUsers};