const {STATUS_CODES, ERROR_CODES, RESPONSE_SUCCESS} = require("./utils/codes");
const {getOrCreateUserByName} = require("./data/user");
const {encrypt} = require("./utils/JWT");
const {COOKIE_KEY, TEN_MINUTES} = require("./utils/enum");
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
            const jwt = encrypt(user.id, Date.now() + TEN_MINUTES);
            res.cookie(COOKIE_KEY, jwt, {maxAge: TEN_MINUTES}); 
            res.json({...RESPONSE_SUCCESS, user});
        }
    },
    delete: (req, res) => {
        res.clearCookie();
        res.json(RESPONSE_SUCCESS);
    },
};
session.post.ignoreAuth = true;
session.delete.ignoreAuth = true;
module.exports = session;