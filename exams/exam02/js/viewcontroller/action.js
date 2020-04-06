import { signIn, signOut, check } from "../model/login";
import { STATUS_CODES, ERROR_CODES } from "../utils/status-error-codes";
import $ from "../utils/mini-jquery";
import { displayError, hideError, ERROR_TYPE } from "./error";
const userStage = $("#user-stage");
const anonymousTemplate = $("#anonymous");
const loggedInTemplate = $("#logged-in");
let isChecking = false;
let gotoHomepageCB;
let gotoAddRecipeCB;
const displayAnonymousPage = () => {
    const anonymousPage = anonymousTemplate.templateClone || $();
    const input = anonymousPage.find("#username") || $();
    const signInBtn = anonymousPage.find("#sign-in") || $();
    signInBtn.disable = true;
    input.onInput((event) => {
        event.preventDefault();
        signInBtn.disable = input.value === "";
    });
    signInBtn.onClick(async (event) => {
        event.preventDefault();
        const response = await signIn(input.value || "");
        input.clearValue();
        if (response.ok) {
            hideError();
            displayLoggedInPage();
        }
        else {
            if (response.status === STATUS_CODES.UNAUTHORIZED) {
                const error = await response.json();
                if (error.errorCode === ERROR_CODES.WRONG_USER_NAME) {
                    displayError(ERROR_TYPE.USER_NAME_ERROR);
                    return;
                }
            }
            displayError(ERROR_TYPE.UNEXPECTED_ERROR);
        }
    });
    userStage.removeChildren();
    userStage.append(anonymousPage);
};
const displayLoggedInPage = () => {
    const loggedInPage = loggedInTemplate.templateClone || $();
    const addItem = loggedInPage.find("#add") || $();
    const signOutBtn = loggedInPage.find("#sign-out") || $();
    addItem.onClick((event) => {
        event.preventDefault();
        if (gotoAddRecipeCB) {
            gotoAddRecipeCB();
        }
    });
    signOutBtn.onClick(async (event) => {
        event.preventDefault();
        await signOut();
        hideError();
        displayAnonymousPage();
        if (gotoHomepageCB) {
            gotoHomepageCB();
        }
    });
    userStage.removeChildren();
    userStage.append(loggedInPage);
};
const displayAction = async (gotoHomepage, gotoAddRecipe) => {
    if (!isChecking) {
        isChecking = true;
        gotoHomepageCB = gotoHomepage;
        gotoAddRecipeCB = gotoAddRecipe;
        const response = await check();
        isChecking = false;
        if (response.ok) {
            displayLoggedInPage();
        }
        else {
            displayAnonymousPage();
        }
    }
};
export default displayAction;
