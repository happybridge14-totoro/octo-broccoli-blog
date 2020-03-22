import {start as sseStart, stop as sseStop} from "./sse";
import {start as wsStart, stop as wsStop} from "./websocket";
import {TYPE, dataObject} from "./dataInterface";

let userTimeStamp:number = 0;
let chatTimeStamp:number = 0;
let userResolver:any;
let chatResolver:any;
let isStarted:boolean = false;
const filterMessage = (data:dataObject) => {
    if (data.type === TYPE.CHAT) {
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
    } else {
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
const getUsers = (timestamp:number):Promise<Array<string>> => {
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
const getChat = (timestamp:number):Promise<Array<string>> => {
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

export {stop, getUsers, getChat}