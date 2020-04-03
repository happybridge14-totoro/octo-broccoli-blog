import api from "../utils/api";
import {getChat, stop as longStop} from "./long-connection";
import { messageBody, messageObject} from "./dataInterface";
const URL = "/chat";
let timestamp:number = 0;
const getURL = (isLong:boolean|null=false):string => {
    return (isLong ? "/long" : "") + URL;
};

const sendMessage = (message: string):Promise<Response> => {
    return api.post(getURL(), {message});
};

const getMessage = () => {
    return api.get(getURL());
};
const getLongMessage = () => {
    return api.get(getURL(true)).then((res:Response)=>{
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res);
        }
    });
};
let intervalHandler:number = -1;
let shortMessageResolver:any;
let shortMessageRejecter:any;
const beginShowMessageLoop = () => {
    if (intervalHandler === -1) {
        intervalHandler = setInterval(() => {
            getMessage().then((res:Response)=>{
                if (res.ok) {
                    res.json().then((datas:Array<messageBody>) => {
                        if (datas.length > 0 && datas[datas.length - 1].timestamp > timestamp) {
                            const message = datas.filter((data:messageBody) => {
                                return data.timestamp > timestamp;
                            });
                            timestamp = datas[datas.length - 1].timestamp;
                            shortMessageResolver({
                                timestamp: timestamp,
                                message
                            });
                        }
                    });
                } else {
                    shortMessageRejecter(res);
                }
            });
        }, 5000);
    }
};
const getShortMessage = ()=> {
    return new Promise((resolve, reject) => {
        shortMessageResolver = resolve;
        shortMessageRejecter = reject;
    });
};
let signalRejecter:any;
let signalPromise:Promise<boolean> | null;
const getSignal = () => {
    if (!signalPromise) {
        signalPromise = new Promise((resolve, reject) => {
            signalRejecter = reject;
        });
    }
    return signalPromise;
};
const receiveMessage = (tmpTimestamp:number):Promise<messageObject> => {
    timestamp = Math.max(timestamp, tmpTimestamp);
    beginShowMessageLoop();
    return Promise.race([getSignal(), getChat(timestamp), getLongMessage(), getShortMessage()]).then((data:messageObject)=>{
        if (timestamp > data.timestamp) {
            return receiveMessage(timestamp);
        } else {
            timestamp = data.timestamp;
            return data;
        }
    });
};

const stopMessage = () => {
    timestamp = 0;
    longStop();
    if (signalRejecter) {
        signalRejecter();
        signalPromise = null;
        signalRejecter = null;
    }
    if (intervalHandler != -1) {
        clearInterval(intervalHandler);
        intervalHandler = -1;
    }
};
export {sendMessage, getMessage, receiveMessage, stopMessage};