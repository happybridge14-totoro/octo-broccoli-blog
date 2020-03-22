import $ from "../utils/mini-jquery.js";
import { signOut } from "../model/login.js";
import { sendMessage, receiveMessage, stopMessage } from "../model/chat.js";
import { receiveUsers, stopUser } from "../model/users.js";
import { hideError } from "./error.js";
const chatPageTemplate = $("#chat");
const userTemplate = $("#user");
const chatTemplate = $("#message");
let resolver;
const displayChat = (parent, data) => {
    const updateChat = ({ userName, message, timestamp }) => {
        const messagePage = chatTemplate.templateClone || $();
        const name = messagePage.find(".chat-name") || $();
        const time = messagePage.find(".chat-time") || $();
        const content = messagePage.find(".chat-content") || $();
        time.time = timestamp;
        name.updateContent(userName);
        content.updateContent(message);
        parent.append(messagePage);
    };
    const handlePromise = (timestamp) => {
        receiveMessage(timestamp).then((content) => {
            content.message.forEach((message) => {
                updateChat(message);
            });
            parent.scrollToButtom();
            handlePromise(timestamp);
        }).catch((e) => {
            if (resolver) {
                stopMessage();
                stopUser();
                resolver();
                resolver = null;
            }
        });
    };
    parent.removeChildren();
    if (data) {
        data.forEach((value) => {
            updateChat(value);
        });
        parent.scrollToButtom();
        let timestamp = 0;
        if (data.length > 0) {
            timestamp = data[data.length - 1].timestamp;
        }
        handlePromise(timestamp);
    }
};
const displayUser = (parent) => {
    const updateUser = (userName, userParent) => {
        const userPage = userTemplate.templateClone || $();
        const name = userPage.find(".user-name") || $();
        name.updateContent(userName);
        userParent.append(userPage);
    };
    const handlePromise = (timestamp) => {
        receiveUsers(timestamp).then((content) => {
            const parentNode = $("");
            content.users.forEach((userName) => {
                updateUser(userName, parentNode);
            });
            parent.removeChildren();
            parent.append(parentNode);
            parent.scrollToButtom();
            handlePromise(timestamp);
        }).catch((e) => {
            if (e) {
                console.error(e);
            }
            if (resolver) {
                stopUser();
                stopMessage();
                resolver();
                resolver = null;
            }
        });
    };
    const timestamp = 0;
    handlePromise(timestamp);
};
const displayChatPage = (stage, chat) => {
    const chatPage = chatPageTemplate.templateClone || $();
    const messagePage = chatPage.find(".chat-detail") || $();
    const userPage = chatPage.find(".users-detail") || $();
    const signout = chatPage.find(".signout") || $();
    const send = chatPage.find(".send") || $();
    const message = chatPage.find(".message") || $();
    send.disable = true;
    signout.onClick((event) => {
        event.preventDefault();
        signOut().then(() => {
            if (resolver) {
                resolver();
                resolver = null;
            }
            stopUser();
            stopMessage();
        });
    });
    message.onInput((event) => {
        send.disable = message.value === "";
    });
    send.onClick(async (event) => {
        const value = message.value;
        const response = await sendMessage(value);
        if (response.ok) {
            hideError();
            message.value = "";
            send.disable = true;
        }
        else {
            if (response.status === 401) {
                if (resolver) {
                    stopMessage();
                    stopUser();
                    resolver();
                    resolver = null;
                }
            }
        }
    });
    stage.append(chatPage);
    displayChat(messagePage, chat);
    displayUser(userPage);
    return new Promise((resolve, reject) => {
        resolver = resolve;
    });
};
export default displayChatPage;
