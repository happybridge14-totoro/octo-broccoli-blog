const {session, user} = require("../model/data");
const beginNewGame = (sessionId) => {
    let newSessionId = sessionId;
    const oldSession = session.getSession(sessionId);
    if (oldSession) {
        newSessionId = session.createAndGetSession(sessionId, oldSession.userId).sessionId;
    } else {
        newSessionId = session.createAndGetSession().sessionId;
    }
    return newSessionId;
};
module.exports = beginNewGame;