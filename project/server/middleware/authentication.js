const JWT = require("../utils/JWT");
const {STATUS_CODES, ERROR_CODES} = require("../utils/codes");
const {COOKIE_KEY} = require("../utils/enum");
const auth = (req, res, next) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const jwtToken = req.cookie[COOKIE_KEY];
        const info = JWT.getInfoByToken(jwtToken) ;
        if (info) {
            const {userid} = info;
            req.userid = userid;
            next();
        } else {
            res.clearCookie(COOKIE_KEY);
            res.status(STATUS_CODES.FORBIDDEN);
            res.json(ERROR_CODES.WRONG_USER_ID);
        }
    } else {
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED);
        res.json(ERROR_CODES.TOKEN_NOT_FOUND);
    }
};

module.exports = auth;