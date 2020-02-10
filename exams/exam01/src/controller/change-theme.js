const {session, user} = require("../model/dataProxy");
const changeTheme = (sessionId) => {
    const currentSession = session.getSession(sessionId);
    if (currentSession && currentSession.userId) {
        user.changeThemeAndGetUser(currentSession.userId);
    }
};

module.exports = changeTheme;