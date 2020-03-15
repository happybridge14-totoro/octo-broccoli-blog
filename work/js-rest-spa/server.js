const express = require("express");
const app = express();
const path = require("path");
const deleteSession = require("./src/middleware/delete-session");
const cookieParser = require("./src/middleware/cookie");
const {
    INVALID_USER_ID,
    getUserIdByName,
    createOrGetUserInfo,
    getUserIdBySessionId,
    createSessionByUserId,
    addItem,
    updateItem,
    deleteItem} = require("./src/data");
const PORT = 3000;
const COOKIE_KEY = "sessionid";
const RESPONSE_SUCCESS = {
    errorCode: 0
};
const ERROR_CODES = {
    "WRONG_USER_ID": {
        errorCode: 3,
        errorSummary: "Wrong user id."
    },
    "WRONG_USER_NAME": {
        errorCode: 4,
        errorSummary: "Wrong user name."
    },
    "SESSION_NOT_FOUND": {
        errorCode: 5,
        errorSummary: "SessionId not found."
    },
    "WRONG_SESSION": {
        errorCode: 6,
        errorSummary: "Wrong session id."
    },
    "ITEM_ID_ERROR": {
        errorCode: 10,
        errorSummary: "Invalid item id."
    },
    "ITEM_NAME_ERROR": {
        errorCode: 11,
        errorSummary: "Invalid item name."
    },
    "ITEM_QUALITY_ERROR": {
        errorCode: 12,
        errorSummary: "Invalid item quality."
    },
    "ITEM_DULPLICATED": {
        errorCode: 15,
        errorSummary: "Dulplicated item."
    },
    "NOT_FOUND":  {
        errorCode: 1000,
        errorSummary: "Path not found."
    }
};
const STATUS_CODES = {
    "SUCCESS": 200,
    "BAD_RQUEST": 400,
    "UNAUTHORIZED": 401,
    "NOT_FOUND": 404,
    "DUPLICATED": 409,
    "INTERNAL_SERVER_ERROR": 500
};

app.use(cookieParser);
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});
app.use(express.static("./public"));
// Sign out
app.delete("/session", deleteSession, (req, res) => {
    res.json(RESPONSE_SUCCESS);
});
// Sign in
app.post("/session", deleteSession, (req, res) => {
    if (req.body.userName && !/((dog)| )+/.test(req.body.userName)) {
        let userId = getUserIdByName(req.body.userName);
        if (userId === INVALID_USER_ID) {
            userId = createOrGetUserInfo(userId, req.body.userName).userId;
        }
        const sessionId = createSessionByUserId(userId);
        res.cookie(COOKIE_KEY, sessionId);
        res.json(RESPONSE_SUCCESS);
    } else {
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED)
            .json(ERROR_CODES.WRONG_USER_NAME);
    }
});
app.delete("/items/:itemid", (req, res) => {
    if (req.cookies && req.cookies[COOKIE_KEY]) {
        const sessionId = req.cookies[COOKIE_KEY];
        const userId = getUserIdBySessionId(sessionId);
        if (userId !== INVALID_USER_ID) {
            deleteItem(userId, req.params.itemid);
            res.sendStatus(STATUS_CODES.SUCCESS);
        } else {
            res.clearCookie(COOKIE_KEY);
            res.status(STATUS_CODES.UNAUTHORIZED)
                .json(ERROR_CODES.WRONG_USER_ID);
        }
    } else {
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED)
            .json(ERROR_CODES.SESSION_NOT_FOUND);
    }
});
app.get("/items", (req, res) => {
    if (req.cookies && req.cookies[COOKIE_KEY]) {
        const sessionId = req.cookies[COOKIE_KEY];
        const userId = getUserIdBySessionId(sessionId);
        const userInfo = createOrGetUserInfo(userId);
        if (userInfo) {
            res.json(userInfo.items);
            return;
        } else {
            res.clearCookie(COOKIE_KEY);
            res.status(STATUS_CODES.UNAUTHORIZED)
                .json(ERROR_CODES.WRONG_USER_ID);
        }
    } else {
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED)
            .json(ERROR_CODES.SESSION_NOT_FOUND);
    }
});
app.post("/items", (req, res) => {
    if (req.cookies && req.cookies[COOKIE_KEY]) {
        const sessionId = req.cookies[COOKIE_KEY];
        const {itemName, itemQuality} = req.body;
        if (itemName) {
            if (itemQuality > 0) {
                const userId = getUserIdBySessionId(sessionId);
                const {validId, validItem, itemId} = addItem(userId, itemName, itemQuality);
                if (!validId) {
                    res.clearCookie(COOKIE_KEY);
                    res.status(STATUS_CODES.UNAUTHORIZED)
                        .json(ERROR_CODES.WRONG_USER_ID);
                } else if (!validItem) {
                    res.status(STATUS_CODES.DUPLICATED)
                        .json(ERROR_CODES.ITEM_DULPLICATED);
                } else {
                    res.json(Object.assign({itemId}, RESPONSE_SUCCESS));
                }
            } else {
                res.status(STATUS_CODES.BAD_RQUEST)
                    .json(ERROR_CODES.ITEM_QUALITY_ERROR);
            }
        } else {
            res.status(STATUS_CODES.BAD_RQUEST)
                .json(ERROR_CODES.ITEM_NAME_ERROR);
        }
    } else {
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED)
            .json(ERROR_CODES.SESSION_NOT_FOUND);
    }
});
app.put("/items/:itemid", (req, res) => {
    if (req.cookies && req.cookies[COOKIE_KEY]) {
        const sessionId = req.cookies[COOKIE_KEY];
        const itemId = req.params.itemid;
        const {itemQuality} = req.body;
        if (itemId) {
            if (itemQuality > 0) {
                const userId = getUserIdBySessionId(sessionId);
                const {validUserId, validItemId} = updateItem(userId, itemId, itemQuality);
                if (!validUserId) {
                    res.clearCookie(COOKIE_KEY);
                    res.status(STATUS_CODES.UNAUTHORIZED)
                        .json(ERROR_CODES.WRONG_USER_ID);
                } else if (!validItemId) {
                    res.clearCookie(COOKIE_KEY);
                    res.status(STATUS_CODES.BAD_RQUEST)
                        .json(ERROR_CODES.ITEM_ID_ERROR);
                } else {
                    res.json(Object.assign({itemId}, RESPONSE_SUCCESS));
                }
            } else {
                res.status(STATUS_CODES.BAD_RQUEST)
                    .json(ERROR_CODES.ITEM_QUALITY_ERROR);
            }
        } else {
            res.status(STATUS_CODES.BAD_RQUEST)
                .json(ERROR_CODES.ITEM_ID_ERROR);
        }
    } else {
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED)
            .json(ERROR_CODES.SESSION_NOT_FOUND);
    }
});
app.use((req, res) => {
    res.status(STATUS_CODES.NOT_FOUND);
    res.sendFile(path.join(__dirname + '/view/404.html'));
});
app.listen(PORT, () => {
    console.log("Listerning to " + PORT);
});