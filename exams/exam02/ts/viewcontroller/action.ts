import {signIn, signOut, check} from "../model/login";
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes";
import $, {MiniJquery} from "../utils/mini-jquery";
import {displayError, hideError, ERROR_TYPE} from "./error";

const userStage:MiniJquery = $("#user-stage");
const anonymousTemplate:MiniJquery = $("#anonymous");
const loggedInTemplate:MiniJquery = $("#logged-in");
let isChecking:boolean = false;

let gotoHomepageCB:()=>void;
let gotoAddRecipeCB:()=>void;

const displayAnonymousPage = () => {
    const anonymousPage:MiniJquery = anonymousTemplate.templateClone || $();

    const input:MiniJquery = anonymousPage.find("#username") || $();
    const signInBtn:MiniJquery = anonymousPage.find("#sign-in") || $();
    signInBtn.disable = true;

    input.onInput((event:Event) => {
        event.preventDefault();
        signInBtn.disable = input.value === "" || /((dog)| )+/.test(input.value);
    });
    signInBtn.onClick(async(event:Event) => {
        event.preventDefault();
        const response = await signIn(input.value||"");
        input.clearValue();
        if (response.ok) {
            hideError();
            displayLoggedInPage();
        } else {
            if (response.status === STATUS_CODES.UNAUTHORIZED) {
                const error:ERROR_OBJECT = await response.json();
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
    const loggedInPage:MiniJquery = loggedInTemplate.templateClone || $();

    const addItem:MiniJquery = loggedInPage.find("#add") || $();
    const signOutBtn:MiniJquery = loggedInPage.find("#sign-out") || $();

    addItem.onClick((event:Event) => {
        event.preventDefault();
        if (gotoAddRecipeCB) {
            gotoAddRecipeCB();
        }
    });
    signOutBtn.onClick(async (event:Event) => {
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

const displayAction = async (gotoHomepage:()=>void, gotoAddRecipe:()=>void):Promise<void>=> {
    if (!isChecking) {
        isChecking = true;
        gotoHomepageCB = gotoHomepage;
        gotoAddRecipeCB = gotoAddRecipe;
        const response:Response = await check();
        isChecking = false;
        if (response.ok) {
            displayLoggedInPage();
        } else {
            displayAnonymousPage();
        }
    }
};

export default displayAction;