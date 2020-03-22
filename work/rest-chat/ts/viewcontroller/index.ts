import {getMessage}  from "../model/chat.js";
import $, { MiniJquery } from "../utils/mini-jquery.js";
import displayLoginPage from "./login.js";
import displayChatPage from "./chat.js";
import {displayError, hideError} from "./error.js";
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes.js";
import { dataObject , messageBody} from "../model/dataInterface.js";
enum PAGES {
    LOGIN,
    CHAT
};
const WRONT_USER_ID_MESSAGE:string = "Wrong user! Please login again.";
const stage:MiniJquery = $("#stage");
const loading:MiniJquery = $(".loading");

let currentPage:PAGES|null;

const displayPage = (page:PAGES, chat:Array<messageBody> = []) => {
    switch(page) {
        case PAGES.CHAT:
            if (currentPage !== PAGES.CHAT) {
                currentPage = PAGES.CHAT;
                stage.removeChildren();
                displayChatPage(stage, chat).then(() => {
                    displayPage(PAGES.LOGIN);
                });
            }
            break;
        case PAGES.LOGIN:
            if (currentPage !== PAGES.LOGIN) {
                currentPage = PAGES.LOGIN;
                stage.removeChildren();
                displayLoginPage(stage).then(() => {
                    renderPage();
                });
            }
            break;
        default:
            break;
    }
};

const renderPage = async () => {
    try {
        loading.hidden = false;
        const response:Response = await getMessage();
        loading.hidden = true;
        if (response.ok) {
            hideError();
            const chat = await response.json();
            displayPage(PAGES.CHAT, chat);
        } else if (response.status === STATUS_CODES.UNAUTHORIZED){
            const errorMessage:ERROR_OBJECT = await response.json();
            if (errorMessage.errorCode === ERROR_CODES.WRONG_USER_ID) {
                displayError(WRONT_USER_ID_MESSAGE);
            } else {
                hideError();
            }
            displayPage(PAGES.LOGIN);
        } else {
            console.error("Unexpect error!");
        }
    } catch(e) {
        console.error("Unexpect error!");
    }
};

const init = async () => {
    return await renderPage();
};
export default init;