import { getMessage } from "../model/chat.js";
import $ from "../utils/mini-jquery.js";
import displayLoginPage from "./login.js";
import displayChatPage from "./chat.js";
import { displayError, hideError } from "./error.js";
var PAGES;
(function (PAGES) {
    PAGES[PAGES["LOGIN"] = 0] = "LOGIN";
    PAGES[PAGES["CHAT"] = 1] = "CHAT";
})(PAGES || (PAGES = {}));
;
const WRONT_USER_ID_MESSAGE = "Wrong user! Please login again.";
const stage = $("#stage");
const loading = $(".loading");
let currentPage;
const displayPage = (page, chat = []) => {
    switch (page) {
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
        const response = await getMessage();
        loading.hidden = true;
        if (response.ok) {
            hideError();
            const chat = await response.json();
            displayPage(PAGES.CHAT, chat);
        }
        else if (response.status === 401) {
            const errorMessage = await response.json();
            if (errorMessage.errorCode === 3) {
                displayError(WRONT_USER_ID_MESSAGE);
            }
            else {
                hideError();
            }
            displayPage(PAGES.LOGIN);
        }
        else {
            console.error("Unexpect error!");
        }
    }
    catch (e) {
        console.error("Unexpect error!");
    }
};
const init = async () => {
    return await renderPage();
};
export default init;
