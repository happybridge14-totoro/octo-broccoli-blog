import $, { MiniJquery } from "../utils/mini-jquery";

import {PAGES, USER_STATUS} from "./pageInterface";

const WRONT_USER_ID_MESSAGE:string = "Wrong user! Please login again.";


const recipeStage:MiniJquery = $("#recipe-stage");
const userStage:MiniJquery = $("#user-stage");

let currentPage:PAGES = PAGES.INIT;
let userStatus:USER_STATUS = USER_STATUS.INIT;

const logout = () => {

};

const displayPage = (targetPage: PAGES) => {
    if (currentPage !== targetPage) {
        recipeStage.removeChildren();
    }
};
const changeUserStatus = (status: USER_STATUS) => {
    if (userStatus !== status) {
        userStage.removeChildren();
    }
};

const init = () => {
    displayPage(PAGES.DETAIL);
    changeUserStatus(USER_STATUS.ANONYMOUS);
};
export default init;