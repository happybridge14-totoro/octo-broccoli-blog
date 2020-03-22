import $ from "../utils/mini-jquery.js";
import { getUsers, stop as longStop } from "./long-connection.js";
const URL = "/users";
let timestamp = 0;
const getURL = (isLong = false) => {
    return (isLong ? "/long" : "") + URL;
};
const getUser = () => {
    return $.get(getURL());
};
const getLongUser = () => {
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
let shortUserResolver;
let shortUserRejecter;
const beginShowUserLoop = () => {
    if (intervalHandler === -1) {
        setTimeout(() => {
            getUser().then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        if (data.timestamp > timestamp) {
                            shortUserResolver(data);
                        }
                    });
                }
                else {
                    shortUserRejecter(res);
                }
            });
        });
        intervalHandler = setInterval(() => {
            getUser().then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        if (data.timestamp > timestamp) {
                            shortUserResolver(data.users);
                        }
                    });
                }
                else {
                    shortUserRejecter(res);
                }
            });
        }, 5000);
    }
};
const getShortUser = () => {
    return new Promise((resolve, reject) => {
        shortUserResolver = resolve;
        shortUserRejecter = reject;
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
const receiveUsers = (tmpTimestamp) => {
    timestamp = Math.max(timestamp, tmpTimestamp);
    beginShowUserLoop();
    return Promise.race([getSignal(), getUsers(timestamp), getLongUser(), getShortUser()]).then((data) => {
        if (timestamp > data.timestamp) {
            return receiveUsers(timestamp);
        }
        else {
            timestamp = data.timestamp;
            return data;
        }
    });
};
const stopUser = () => {
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
export { receiveUsers, stopUser };
