const {STATUS_CODES, ERROR_CODES, RESPONSE_SUCCESS} = require("./utils/codes");
const {getUserById} = require("./data/user");
const user = {
    get: (req, res) => {
        const paramUserId = req.params.id;
        const tokenUserId = req.userid;
        if (paramUserId === tokenUserId) {
            const user = getUserById(tokenUserId);
            if (user) {
                res.json({RESPONSE_SUCCESS, user});
                return;
            }
        } 
        res.status(STATUS_CODES.FORBIDDEN);
        res.json(ERROR_CODES.WRONG_USER_ID);
    },
    put: (req, res) => {
        res.write("user.one.put");
        res.end();
    }
};
module.exports = user;