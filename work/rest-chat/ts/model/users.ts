import $ from "../utils/mini-jquery";
import {getUsers, stop as longStop} from "./long-connection";
import { userObject } from "./dataInterface";
const URL = "/users";
let timestamp:number = 0;
const getURL = (isLong:boolean|null=false):string => {
    return (isLong ? "/long" : "") + URL;
};

const getUser = () => {
    return $.get(getURL());
};
const getLongUser = () => {
    return $.get(getURL(true)).then((res:Response)=>{
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res);
        }
    });
};
let intervalHandler:number = -1;
let shortUserResolver:any;
let shortUserRejecter:any;
const beginShowUserLoop = () => {
    if (intervalHandler === -1) {
        setTimeout(() => {
            getUser().then((res:Response)=>{
                if (res.ok) {
                    res.json().then((data:userObject) => {
                        if (data.timestamp > timestamp) {
                            shortUserResolver(data);
                        }
                    });
                } else {
                    shortUserRejecter(res);
                }
            });
        });
        intervalHandler = setInterval(() => {
            getUser().then((res:Response)=>{
                if (res.ok) {
                    res.json().then((data:userObject) => {
                        if (data.timestamp > timestamp) {
                            shortUserResolver(data.users);
                        }
                    });
                } else {
                    shortUserRejecter(res);
                }
            });
        }, 5000);
    }
};
const getShortUser = ()=> {
    return new Promise((resolve, reject) => {
        shortUserResolver = resolve;
        shortUserRejecter = reject;
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
const receiveUsers = (tmpTimestamp:number):Promise<userObject> => {
    timestamp = Math.max(timestamp, tmpTimestamp);
    beginShowUserLoop();
    return Promise.race([getSignal(), getUsers(timestamp), getLongUser(), getShortUser()]).then((data:userObject)=>{
        if (timestamp > data.timestamp) {
            return receiveUsers(timestamp);
        } else {
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
export {receiveUsers, stopUser};