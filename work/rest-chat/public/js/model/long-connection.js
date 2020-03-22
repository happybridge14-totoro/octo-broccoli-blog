import { start as sseStart, stop as sseStop } from "./sse.js";
import { start as wsStart, stop as wsStop } from "./websocket.js";
let userTimeStamp = 0;
let chatTimeStamp = 0;
let userResolver;
let chatResolver;
let isStarted = false;
const filterMessage = (data) => {
    if (data.type === "chat") {
        if (data.timestamp > chatTimeStamp) {
            if (chatResolver) {
                const newData = {
                    timestamp: data.timestamp,
                    message: data.message
                };
                chatResolver(newData);
                chatTimeStamp = data.timestamp;
            }
            chatResolver = null;
        }
    }
    else {
        if (data.timestamp > userTimeStamp) {
            if (userResolver) {
                const newData = {
                    timestamp: data.timestamp,
                    users: data.users
                };
                userResolver(newData);
                userTimeStamp = data.timestamp;
            }
            userResolver = null;
        }
    }
};
const start = () => {
    sseStart(filterMessage);
    wsStart(filterMessage);
};
const stop = () => {
    if (isStarted) {
        sseStop();
        wsStop();
    }
    isStarted = false;
};
const getUsers = (timestamp) => {
    if (!isStarted) {
        start();
        isStarted = true;
    }
    if (userTimeStamp < timestamp) {
        userTimeStamp = timestamp;
    }
    return new Promise((resolve, reject) => {
        userResolver = resolve;
    });
};
const getChat = (timestamp) => {
    if (!isStarted) {
        start();
        isStarted = true;
    }
    if (chatTimeStamp < timestamp) {
        chatTimeStamp = timestamp;
    }
    return new Promise((resolve, reject) => {
        chatResolver = resolve;
    });
};
export { stop, getUsers, getChat };
