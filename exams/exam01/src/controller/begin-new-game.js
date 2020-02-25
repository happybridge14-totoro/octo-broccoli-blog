const {session, user, game} = require("../model/dataProxy");
const beginNewGame = (sessionId) => {
    let newSessionId = sessionId;
    const oldSession = session.getSession(sessionId);
    const newGameId = game.createNewGame().id;
    if (oldSession) {
        if (oldSession.userId) {
            user.updateGameIdForUser(oldSession.userId, newGameId);
        }
        newSessionId = session.createAndGetSession(newGameId, oldSession.userId, sessionId).sessionId;
    } else {
        newSessionId = session.createAndGetSession(newGameId).sessionId;
    }
    return newSessionId;
};
module.exports = beginNewGame;