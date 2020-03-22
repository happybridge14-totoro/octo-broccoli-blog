import $, { MiniJquery } from "../utils/mini-jquery.js";
import { dataObject , messageBody, messageObject} from "../model/dataInterface.js";
import {signOut} from "../model/login.js";
import {sendMessage, getMessage, receiveMessage, stopMessage} from "../model/chat.js";
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes.js";
import {displayError, hideError} from "./error.js";

const chatPageTemplate:MiniJquery = $("#chat");
const userTemplate:MiniJquery = $("#user");
const chatTemplate:MiniJquery = $("#message");
let resolver:any;
let chatPromise:any;
let userPromise:any;
const displayChat = (parent:MiniJquery, data:Array<messageBody>) => {
    const messagePageTemplate:MiniJquery = $("#message");
    const updateChat = (userName:string, message:string) => {
        const messagePage:MiniJquery = messagePageTemplate.templateClone || $();
        const name:MiniJquery = messagePage.find(".chat-name") || $();
        const content:MiniJquery = messagePage.find(".chat-content") || $();
        name.text = userName;
        content.text = message;
        parent.append(messagePage);
        parent.scrollToButtom();
    };
    const handlePromise = (timestamp:number) => {
        chatPromise = receiveMessage(timestamp);
        chatPromise.then((content:messageObject)=>{
            content.message.forEach(({userName, message}:messageBody)=> {
                updateChat(userName, message);
            });
            handlePromise(timestamp);
        }).catch((e:Error)=>{
            console.error(e);
            if (resolver) {
                stopMessage();
                resolver();
            }
        });
    };
    parent.removeChildren();
    if (data) {
        data.forEach((value:messageBody)=>{
            updateChat(value.userName, value.message);
        });
        let timestamp:number = 0;
        if (data.length > 0) {
            timestamp = data[data.length - 1].timestamp;
        }
        handlePromise(timestamp);
    }
};
const displayUser = (parent:MiniJquery) => {
    const updateUser = () => {

    };
};

const displayChatPage = (stage: MiniJquery, chat: Array<messageBody>) => {
    const chatPage:MiniJquery = chatPageTemplate.templateClone || $();
    const messagePage: MiniJquery = chatPage.find(".chat-detail") || $();
    const userPage: MiniJquery = chatPage.find(".user-detail") || $();
    const signout:MiniJquery = chatPage.find(".signout") || $();
    const send:MiniJquery = chatPage.find(".send") || $();
    const message:MiniJquery = chatPage.find(".message") || $();
    send.disable = true;
    signout.onClick((event:Event) => {
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
        const response:Response = await sendMessage(value);
        if (response.ok) {
            hideError();
            message.value = "";
            send.disable = true;
        } else {
            if (response.status === STATUS_CODES.UNAUTHORIZED) {
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
    return new Promise((resolve, reject)=>{
        resolver = resolve;
    });
};

export default displayChatPage;