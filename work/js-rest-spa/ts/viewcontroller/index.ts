import {getItems} from "../model/items.js";

import $, { MiniJquery } from "../utils/mini-jquery.js";
import displayLoginPage from "./login.js";
import displayItemsPage from "./items.js";

enum PAGES {
    LOGIN,
    ITEMS
};
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
const enum STATUS {
    UNAUTHORIZED = 401
};

const renderPage = async () => {
    try {
        loading.hidden = false;
        const response:Response = await getItems();
        loading.hidden = true;
        if (response.ok) {
            const items = await response.json();
            displayPage(PAGES.ITEMS, items);
        } else if (response.status === STATUS.UNAUTHORIZED){
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