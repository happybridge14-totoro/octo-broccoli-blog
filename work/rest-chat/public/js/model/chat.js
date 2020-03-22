import $ from "../utils/mini-jquery.js";
import { getChat, stop as longStop } from "./long-connection.js";
const URL = "/chat";
let timestamp = 0;
const getURL = (isLong = false) => {
    return (isLong ? "/long" : "") + URL;
};
const sendMessage = (message) => {
    return $.post(getURL(), { message });
};
const getMessage = () => {
    return $.get(getURL());
};
const getLongMessage = () => {
    return $.get(getURL(true)).then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(res);
        }
    });
};
let intervalHandler = -1;
let shortMessageResolver;
let shortMessageRejecter;
const beginShowMessageLoop = () => {
    if (intervalHandler === -1) {
        intervalHandler = setInterval(() => {
            getMessage().then((res) => {
                if (res.ok) {
                    res.json().then((datas) => {
                        if (datas.length > 0 && datas[datas.length - 1].timestamp > timestamp) {
                            const message = datas.filter((data) => {
                                return data.timestamp > timestamp;
                            });
                            timestamp = datas[datas.length - 1].timestamp;
                            shortMessageResolver({
                                timestamp: timestamp,
                                message
                            });
                        }
                    });
                }
                else {
                    shortMessageRejecter(res);
                }
            });
        }, 5000);
    }
};
const getShortMessage = () => {
    return new Promise((resolve, reject) => {
        shortMessageResolver = resolve;
        shortMessageRejecter = reject;
    });
};
let signalRejecter;
let signalPromise;
const getSignal = () => {
    if (!signalPromise) {
        signalPromise = new Promise((resolve, reject) => {
            signalRejecter = reject;
        });
    }
    return signalPromise;
};
const receiveMessage = (tmpTimestamp) => {
    timestamp = Math.max(timestamp, tmpTimestamp);
    beginShowMessageLoop();
    return Promise.race([getSignal(), getChat(timestamp), getLongMessage(), getShortMessage()]).then((data) => {
        if (timestamp > data.timestamp) {
            return receiveMessage(timestamp);
        }
        else {
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
export { sendMessage, getMessage, receiveMessage, stopMessage };
