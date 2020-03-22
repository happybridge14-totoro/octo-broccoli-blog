import $ from "../utils/mini-jquery.js";
import { getUsers as getLongUsers } from "./long-connection.js";
const URL = "/users";
let timestamp = 0;
const getURL = (isLong = false) => {
    return (isLong ? "/long" : "") + URL;
};
const getUsers = () => {
    return $.get(getURL());
};
const getLongMessage = () => {
    return $.get(getURL(true));
};
const receiveUsers = () => {
    return Promise.race([getLongUsers(timestamp), getLongMessage()]).then((data) => {
        if (timestamp > data.timestamp) {
            return receiveUsers();
        }
        else {
            timestamp = data.timestamp;
            return data;
        }
    }).catch(() => {
        return receiveUsers();
    });
};
export { getUsers, receiveUsers };
