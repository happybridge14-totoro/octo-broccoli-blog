import {getItems} from "../model/items.js";

import $, { MiniJquery } from "../utils/mini-jquery.js";
import displayLoginPage from "./login.js";
import displayItemsPage from "./items.js";
import {displayError, hideError} from "./error.js";
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes.js";
enum PAGES {
    LOGIN,
    ITEMS
};
const WRONT_USER_ID_MESSAGE:string = "Wrong user! Please login again.";
const stage:MiniJquery = $("#stage");
const loading:MiniJquery = $(".loading");

let currentPage:PAGES|null;

const displayPage = (page:PAGES, items:object|null = null) => {
    switch(page) {
        case PAGES.ITEMS:
            if (currentPage !== PAGES.ITEMS) {
                currentPage = PAGES.ITEMS;
                stage.removeChildren();
                displayItemsPage(stage, items || {}).then(() => {
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
        const response:Response = await getItems();
        loading.hidden = true;
        if (response.ok) {
            hideError();
            const items = await response.json();
            displayPage(PAGES.ITEMS, items);
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