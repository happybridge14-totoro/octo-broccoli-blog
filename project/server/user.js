const {STATUS_CODES, ERROR_CODES, RESPONSE_SUCCESS} = require("./utils/codes");
const { getUserById, EDITABLE_PROPERTY, updateProperty } = require("./data/user");
const { COOKIE_KEY } = require("./utils/enum");
const user = {
    one: {
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
            res.clearCookie(COOKIE_KEY);
            res.status(STATUS_CODES.FORBIDDEN);
            res.json(ERROR_CODES.WRONG_USER_ID);
        },
    }
};
const attributeUpdate = (attribute) => {
    return (req, res) => {
        const paramUserId = req.params.id;
        const tokenUserId = req.userid;
        if (paramUserId === tokenUserId) {
            const user = updateProperty(attribute)(tokenUserId, req.body[attribute]);
            if (user) {
                res.json({
                    RESPONSE_SUCCESS,
                    user
                });
                return;
            }
        }
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.FORBIDDEN);
        res.json(ERROR_CODES.WRONG_USER_ID);
    };
};
Object.values(EDITABLE_PROPERTY).forEach((attribute)=>{
    user[attribute] = {
        put: attributeUpdate(attribute)
    };
});
module.exports = user;