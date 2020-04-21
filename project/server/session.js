const {STATUS_CODES, ERROR_CODES, RESPONSE_SUCCESS} = require("./utils/codes");
const {getOrCreateUserByName} = require("./data/user");
const {encrypt} = require("./utils/JWT");
const {COOKIE_KEY, ONE_HOUR} = require("./utils/enum");
const session = {
    get: (req, res) => {
        const userid = req.userid;
        res.json({...RESPONSE_SUCCESS, userid});
    },
    post: (req, res) => {
        const username = req.body.username;
        if (username === "" || /^ +/.test(username)) {
            res.status(STATUS_CODES.BAD_RQUEST);
            res.json(ERROR_CODES.WRONG_USER_NAME);
        } else {
            const user = getOrCreateUserByName(username);
            const jwt = encrypt(user.id, Date.now() + ONE_HOUR);
            res.cookie(COOKIE_KEY, jwt, {
                maxAge: ONE_HOUR,
                sameSite: "strict"
            });
            res.json({...RESPONSE_SUCCESS, user});
        }
    },
    delete: (req, res) => {
        res.clearCookie(COOKIE_KEY, { sameSite: "strict" });
        res.json(RESPONSE_SUCCESS);
    },
};
session.post.ignoreAuth = true;
session.delete.ignoreAuth = true;
module.exports = session;