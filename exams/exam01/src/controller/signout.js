const {clearSession} = require("../model/dataProxy").session;
const signout = (sessionId) => {
    clearSession(sessionId);
};
module.exports = signout;