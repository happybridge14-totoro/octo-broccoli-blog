const {STATUS_CODES, ERROR_CODES, RESPONSE_SUCCESS} = require("./utils/codes");
const session = {
    post: (req, res) => {
        res.write("session.post");
        res.end();
    },
    delete: (req, res) => {
        res.clearCookie();
        res.json(RESPONSE_SUCCESS);
    },
};
session.post.ignoreAuth = true;
module.exports = session;