const {deleteSessionById} = require("../data");
const deleteSession = (req, res, next) => {
    if (req.cookies && req.cookies[COOKIE_KEY]) {
        const sessionId = req.cookies[COOKIE_KEY];
        deleteSessionById(sessionId);
        res.clearCookie(COOKIE_KEY);
    }
    return next();
};
module.exports = deleteSession;