const {session, user} = require("../model/data");
const changeTheme = (sessionId) => {
    const currentSession = session.getSession(sessionId);
    if (currentSession && currentSession.userId) {
        user.changeThemeAndGetUser(currentSession.userId);
    }
};

module.exports = changeTheme;