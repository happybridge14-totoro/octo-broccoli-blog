import { getItems } from "../model/items.js";
import $ from "../utils/mini-jquery.js";
import displayLoginPage from "./login.js";
import displayItemsPage from "./items.js";
var PAGES;
(function (PAGES) {
    PAGES[PAGES["LOGIN"] = 0] = "LOGIN";
    PAGES[PAGES["ITEMS"] = 1] = "ITEMS";
})(PAGES || (PAGES = {}));
;
const stage = $("#stage");
const displayPage = (page, items = null) => {
    switch (page) {
        case PAGES.ITEMS:
            stage.removeChildren();
            displayItemsPage(stage, items).then(() => {
                displayPage(PAGES.LOGIN);
            });
            break;
        case PAGES.LOGIN:
            stage.removeChildren();
            displayLoginPage(stage).then(() => {
                renderPage();
            });
            break;
        default:
            break;
    }
};
var STATUS;
(function (STATUS) {
    STATUS[STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(STATUS || (STATUS = {}));
;
const renderPage = async () => {
    try {
        const response = await getItems();
        if (response.ok) {
            const items = await response.json();
            displayPage(PAGES.ITEMS, items);
        }
        else if (response.status === 401) {
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
