import $ from "../utils/mini-jquery.js";
import {getUsers as getLongUsers} from "./long-connection.js";
import { dataObject } from "./dataInterface.js";
const URL = "/users";
let timestamp:number = 0;
const getURL = (isLong:boolean|null=false):string => {
    return (isLong ? "/long" : "") + URL;
};

const getUsers = () => {
    return $.get(getURL());
};
const getLongMessage = () => {
    return $.get(getURL(true));
};
const receiveUsers = ():Promise<dataObject>|dataObject => {
    return Promise.race([getLongUsers(timestamp), getLongMessage()]).then((data:dataObject)=>{
        if (timestamp > data.timestamp) {
            return receiveUsers();
        } else {
            timestamp = data.timestamp;
            return data;
        }
    }).catch(() => {
        return receiveUsers();
    });
};

export {getUsers, receiveUsers};