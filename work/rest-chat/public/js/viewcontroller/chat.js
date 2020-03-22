import $ from "../utils/mini-jquery.js";
import { signOut } from "../model/login.js";
import { sendMessage, receiveMessage, stopMessage } from "../model/chat.js";
import { hideError } from "./error.js";
const chatPageTemplate = $("#chat");
const userTemplate = $("#user");
const chatTemplate = $("#message");
let resolver;
let chatPromise;
let userPromise;
const displayChat = (parent, data) => {
    const messagePageTemplate = $("#message");
    const updateChat = (userName, message) => {
        const messagePage = messagePageTemplate.templateClone || $();
        const name = messagePage.find(".chat-name") || $();
        const content = messagePage.find(".chat-content") || $();
        name.text = userName;
        content.text = message;
        parent.append(messagePage);
        parent.scrollToButtom();
    };
    const handlePromise = (timestamp) => {
        chatPromise = receiveMessage(timestamp);
        chatPromise.then((content) => {
            content.message.forEach(({ userName, message }) => {
                updateChat(userName, message);
            });
            handlePromise(timestamp);
        }).catch((e) => {
            if (e) {
                console.error(e);
            }
            if (resolver) {
                stopMessage();
                resolver();
            }
        });
    };
    parent.removeChildren();
    if (data) {
        data.forEach((value) => {
            updateChat(value.userName, value.message);
        });
        let timestamp = 0;
        if (data.length > 0) {
            timestamp = data[data.length - 1].timestamp;
        }
        handlePromise(timestamp);
    }
};
const displayUser = (parent) => {
    const updateUser = () => {
    };
};
const displayChatPage = (stage, chat) => {
    const chatPage = chatPageTemplate.templateClone || $();
    const messagePage = chatPage.find(".chat-detail") || $();
    const userPage = chatPage.find(".user-detail") || $();
    const signout = chatPage.find(".signout") || $();
    const send = chatPage.find(".send") || $();
    const message = chatPage.find(".message") || $();
    send.disable = true;
    signout.onClick((event) => {
        event.preventDefault();
        signOut().then(() => {
            stopMessage();
            resolver();
            resolver = null;
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
