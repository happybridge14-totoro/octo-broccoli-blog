import $ from "../utils/mini-jquery.js";
import { loginPage } from "./login.js";
var PAGES;
(function (PAGES) {
    PAGES[PAGES["LOGIN"] = 0] = "LOGIN";
    PAGES[PAGES["ITEMS"] = 1] = "ITEMS";
})(PAGES || (PAGES = {}));
;
const stage = $("#stage");
let currentPage = null;
const displayPage = (page) => {
    var _a;
    switch (page) {
        case PAGES.ITEMS:
            break;
        case PAGES.LOGIN:
            if (currentPage !== loginPage) {
                (_a = currentPage) === null || _a === void 0 ? void 0 : _a.removeSelf();
                stage.append(loginPage);
            }
            currentPage = loginPage;
            break;
        default:
            break;
    }
};
export { PAGES, displayPage };
