import { PAGES } from "./pageInterface";
import displayAction from "./action";
import displayRecipe from "./recipe";
const gotoHomePage = () => {
    displayRecipe(PAGES.LIST, checkUserStatus);
};
const gotoAddRecipePage = () => {
    displayRecipe(PAGES.ADD, checkUserStatus);
};
const checkUserStatus = () => {
    displayAction(gotoHomePage, gotoAddRecipePage);
};
const init = () => {
    gotoHomePage();
    checkUserStatus();
};
export default init;
