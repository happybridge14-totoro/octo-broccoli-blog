const JWT = require("../utils/JWT");
const {STATUS_CODES, ERROR_CODES} = require("../utils/codes");
const TOKEN_KEY = "token";
const auth = (req, res, next) => {
    if (req.cookie && req.cookie[TOKEN_KEY]) {
        const jwtToken = req.cookie[TOKEN_KEY];
        const userid = req.param.userid;
        const info = JWT.getInfoByToken(jwtToken, userid) ;
        if (info) {
            const {userid} = info;
            req.userid = userid;
            next();
        } else {
            res.clearCookie(TOKEN_KEY);
            res.status(STATUS_CODES.FORBIDDEN);
            res.json(ERROR_CODES.WRONG_SESSION);
        }
    } else {
        res.clearCookie(TOKEN_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED);
        res.json(ERROR_CODES.SESSION_NOT_FOUND);
    }
};

module.exports = auth;