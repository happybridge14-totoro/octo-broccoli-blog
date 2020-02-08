const {clearSession} = require("./").session;
const signout = (sessionId) => {
    clearSession(sessionId);
};
module.exports = signout;