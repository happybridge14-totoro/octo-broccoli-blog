import {PAGES} from "./pageInterface";
import $, { MiniJquery } from "../utils/mini-jquery";
import { getRecipesList } from "../model/recipes";
import { displayError } from "./error";
let checkUserStatusCB:()=>void;
let currentPage:PAGES;

const state:MiniJquery = $("#recipe-stage");

const displayMainPage = () => {
    getRecipesList().then(() => {
    });
};
const displayDetailPage = () => {

};
const displayAddPage = () => {

};

const displayRecipe = (target:PAGES, checkUserStatus:()=>void) => {
    if (currentPage !== target) {
        checkUserStatusCB = checkUserStatus;
        currentPage = target;
        displayMainPage();
    }
};

export default displayRecipe;