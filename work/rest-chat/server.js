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
    getActiveUsers,
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
const SSE_PREFIX = "data:";
const SSE_SUFFIX = "\n\n";
const deleteSession = (sessionId) => {
    if (!deleteSessionById(sessionId)) {
        updateUser();
    };
};
const updateUser = () => {
    const users = getActiveUsers();
    const message = {
        timestamp: Date.now(),
        users
    };
    for (let longuser of longUserSet) {
        longuser.json(message);
    }
    longUserSet.clear();
    message.type = "users";
    for (let sse of sseSet) {
        sse.write(SSE_PREFIX + JSON.stringify(message) + SSE_SUFFIX);
    }
    sendSocketData(message);
};
const updateMessage = (message) => {
    const chat = {
        timestamp: message.timestamp,
        message: [{
            userName: message.userName,
            message: message.message,
            timestamp: message.timestamp
        }]
    };
    for (let longuser of longChatSet) {
        longuser.json(chat);
    }
    longChatSet.clear();
    chat.type = "chat";
    for (let sse of sseSet) {
        sse.write(SSE_PREFIX + JSON.stringify(chat) + SSE_SUFFIX);
    }
    sendSocketData(chat);
};

app.use(cookieParser);
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});
app.use(express.static("./public"));

// Sign out
app.delete("/session", (req, res) => {
    if (req.cookies && req.cookies[COOKIE_KEY]) {
        const sessionId = req.cookies[COOKIE_KEY];
        deleteSession(sessionId);
        res.clearCookie(COOKIE_KEY);
    }
    res.json(RESPONSE_SUCCESS);
});
// Sign in
app.post("/session", (req, res) => {
    if (req.cookies && req.cookies[COOKIE_KEY]) {
        const sessionId = req.cookies[COOKIE_KEY];
        deleteSession(sessionId);
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

//User
app.get("/users", (req, res) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const sessionId = req.cookie[COOKIE_KEY];
        const userId = getUserIdBySessionId(sessionId);
        if (userId !== INVALID_USER_ID) {
            res.json(getActiveUsers());
        } else {
            deleteSession(sessionId);
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
const longUserSet = new Set();
app.get("/long/users", (req, res) => {
    req.on("close", () => {
        longUserSet.delete(res);
    });
    longUserSet.add(res)
});

//Chat
app.post("/chat", (req, res) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const sessionId = req.cookie[COOKIE_KEY];
        const userId = getUserIdBySessionId(sessionId);
        if (userId !== INVALID_USER_ID) {
            const message = req.body.message;
            if (message === "") {
                res.status(STATUS_CODES.BAD_RQUEST)
                    .json(ERROR_CODES.WRONG_MESSAGE);
            } else {
                const userName = createOrGetUserInfo(userId).userName;
                const newMessage = addNewMessage(userName, message);
                updateMessage(newMessage);
                res.json(RESPONSE_SUCCESS);
            }
        } else {
            deleteSession(sessionId);
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

app.get("/chat", (req, res) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const sessionId = req.cookie[COOKIE_KEY];
        const userId = getUserIdBySessionId(sessionId);
        if (userId !== INVALID_USER_ID) {
            res.json(getMessages());
        } else {
            deleteSession(sessionId);
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
const longChatSet = new Set();
app.get("/long/chat", (req, res) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const sessionId = req.cookie[COOKIE_KEY];
        const userId = getUserIdBySessionId(sessionId);
        if (userId !== INVALID_USER_ID) {
            req.on("close", () => {
                longChatSet.delete(res);
            });
            longChatSet.add(res);
        } else {
            deleteSession(sessionId);
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

// SSE
const sseSet = new Set();
app.get("/sse", (req, res) => {
    if (req.cookie && req.cookie[COOKIE_KEY]) {
        const sessionId = req.cookie[COOKIE_KEY];
        const userId = getUserIdBySessionId(sessionId);
        if (userId !== INVALID_USER_ID) {
            console.log("sse hello");
            req.on("close", () => {
                console.log("sse close");
                sseSet.delete(res);
            });
            res.status(200).set({
                "connection": "keep-alive",
                "cache-control": "no-cache",
                "content-type": "text/event-stream"
            });
            sseSet.add(res);;
        } else {
            deleteSession(sessionId);
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

// setInterval(() => {
//     const hello = "hello";
//     for (let a of sseSet) {
//         a.write("data:hello\n\n");
//         a.write("data:" + JSON.stringify({hello}) + "\n\n");
//     }
// }, 5000);

//Web socket
const server = http.createServer(app).listen(PORT, () => {
    console.log("Listerning to " + PORT);
});
const sendSocketData = websocket(server);

//404
app.use((req, res) => {
    res.status(STATUS_CODES.NOT_FOUND);
    res.sendFile(path.join(__dirname + '/view/404.html'));
});