const {session, user, game} = require("../model/dataProxy");
const signin = (sessionid, username) => {
    const {id, gameId} = user.addOrGetUserByName(username);
    let oldSession = session.getSession(sessionid);
    let newSessionId = "";
    if (oldSession) {
        newSessionId = session.createAndGetSession(gameId, id, oldSession.id).sessionId;
    } else {
        newSessionId = session.createAndGetSession(gameId, id).sessionId;
    }
    return newSessionId;
};

module.exports = signin;