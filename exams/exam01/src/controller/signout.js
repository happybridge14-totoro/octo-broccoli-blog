const {clearSession} = require("../model/data").session;
const signout = (sessionId) => {
    clearSession(sessionId);
};
module.exports = signout;