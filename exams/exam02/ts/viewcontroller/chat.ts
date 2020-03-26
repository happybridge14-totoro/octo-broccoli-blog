import $, { MiniJquery } from "../utils/mini-jquery";
import { dataObject , messageBody, messageObject, userObject} from "../model/dataInterface";
import {signOut} from "../model/login";
import {sendMessage, getMessage, receiveMessage, stopMessage} from "../model/chat";
import {receiveUsers, stopUser} from "../model/users"
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes";
import {displayError, hideError} from "./error";

const chatPageTemplate:MiniJquery = $("#chat");
const userTemplate:MiniJquery = $("#user");
const chatTemplate:MiniJquery = $("#message");
let resolver:any;
const displayChat = (parent:MiniJquery, data:Array<messageBody>) => {
    const updateChat = ({userName, message, timestamp}:messageBody) => {
        const messagePage:MiniJquery = chatTemplate.templateClone || $();
        const name:MiniJquery = messagePage.find(".chat-name") || $();
        const time:MiniJquery = messagePage.find(".chat-time") || $();
        const content:MiniJquery = messagePage.find(".chat-content") || $();
        time.time = timestamp;
        name.updateContent(userName);
        content.updateContent(message);
        parent.append(messagePage);
    };
    const handlePromise = (timestamp:number) => {
        receiveMessage(timestamp).then((content:messageObject)=>{
            content.message.forEach((message:messageBody)=> {
                updateChat(message);
            });
            parent.scrollToButtom();
            handlePromise(timestamp);
        }).catch((e:Error)=>{
            //error handler
            // if (e) {
            //     console.error(e);
            // }
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
        data.forEach((value:messageBody)=>{
            updateChat(value);
        });
        parent.scrollToButtom();
        let timestamp:number = 0;
        if (data.length > 0) {
            timestamp = data[data.length - 1].timestamp;
        }
        handlePromise(timestamp);
    }
};
const displayUser = (parent:MiniJquery) => {
    const updateUser = (userName:string, userParent:MiniJquery) => {
        const userPage:MiniJquery = userTemplate.templateClone || $();
        const name:MiniJquery = userPage.find(".user-name") || $();
        name.updateContent(userName);
        userParent.append(userPage);
    };
    const handlePromise = (timestamp:number) => {
        receiveUsers(timestamp).then((content:userObject)=>{
            const parentNode:MiniJquery = $("");
            content.users.forEach((userName:string)=> {
                updateUser(userName, parentNode);
            });
            parent.removeChildren();
            parent.append(parentNode);
            parent.scrollToButtom();
            handlePromise(timestamp);
        }).catch((e:Error)=>{
            //error handler
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

const displayChatPage = (stage: MiniJquery, chat: Array<messageBody>) => {
    const chatPage:MiniJquery = chatPageTemplate.templateClone || $();
    const messagePage: MiniJquery = chatPage.find(".chat-detail") || $();
    const userPage: MiniJquery = chatPage.find(".users-detail") || $();
    const signout:MiniJquery = chatPage.find(".signout") || $();
    const send:MiniJquery = chatPage.find(".send") || $();
    const message:MiniJquery = chatPage.find(".message") || $();
    send.disable = true;
    signout.onClick((event:Event) => {
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
        const response:Response = await sendMessage(value);
        if (response.ok) {
            hideError();
            message.value = "";
            send.disable = true;
        } else {
            if (response.status === STATUS_CODES.UNAUTHORIZED) {
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
    return new Promise((resolve, reject)=>{
        resolver = resolve;
    });
};

export default displayChatPage;