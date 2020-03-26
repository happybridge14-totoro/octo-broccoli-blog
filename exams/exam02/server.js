const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("./src/middleware/cookie");
const websocket = require("./websocket-server");
const {
    INVALID_USER_ID,
    getUserIdByName,
    createOrGetUserInfo,
    getUserIdBySessionId,
    createSessionByUserId,
    deleteSessionById
}  = require("./src/data/user-session");
const {
    addNewMessage, 
    getMessages
}  = require("./src/data/message");
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
    "WRONG_MESSAGE": {
        errorCode: 11,
        errorSummary: "Wrong message."
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
app.delete("/session", (req, res) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const sessionId = req.cookie[COOKIE_KEY];
        deleteSessionById(sessionId)
        res.clearCookie(COOKIE_KEY);
    }
    res.status(STATUS_CODES.SUCCESS).json(RESPONSE_SUCCESS);
});
// Sign in
app.post("/session", (req, res) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const sessionId = req.cookie[COOKIE_KEY];
        deleteSessionById(sessionId)
        res.clearCookie(COOKIE_KEY);
    }
    if (req.body.userName && !/((dog)| )+/.test(req.body.userName)) {
        let userId = getUserIdByName(req.body.userName);
        if (userId === INVALID_USER_ID) {
            userId = createOrGetUserInfo(userId, req.body.userName).userId;
        }
        const sessionId = createSessionByUserId(userId);
        res.cookie(COOKIE_KEY, sessionId);
        res.json(RESPONSE_SUCCESS);
        updateUser();
    } else {
        res.clearCookie(COOKIE_KEY);
        res.status(STATUS_CODES.UNAUTHORIZED)
            .json(ERROR_CODES.WRONG_USER_NAME);
    }
});

//404
app.use((req, res) => {
    res.status(STATUS_CODES.NOT_FOUND);
    res.sendFile(path.join(__dirname + '/view/404.html'));
});