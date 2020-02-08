const {session, user} = require("../model/data");
const changeTheme = (sessionId) => {
    const {userId} = session.getSession(sessionId);
    if (userId) {
        user.changeThemeAndGetUser(userId);
    }
};

module.exports = changeTheme;