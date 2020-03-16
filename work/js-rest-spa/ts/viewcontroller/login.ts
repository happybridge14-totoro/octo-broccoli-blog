import {signIn} from "../model/login.js";
import { STATUS_CODES, ERROR_CODES } from "../utils/status-error-codes.js";
import $, {MiniJquery} from "../utils/mini-jquery.js";
import {displayError, hideError} from "./error.js";

const USER_NAME_ERROR_MESSAGE = "User name is not valid!";
const UNEXPECTED_ERROR_MESSAGE = "Something went wrong!";
const template:MiniJquery = $("#login");

const displayLoginPage = (parentElement:MiniJquery):Promise<boolean> => {
    const loginPage:MiniJquery = template.templateClone || $();
    const input:MiniJquery = loginPage.find("#user-name") || $();
    const signin:MiniJquery = loginPage.find(".signin") || $();
    
    let resolver:any; 
    let rejecter:any; 
    
    interface ERROR_OBJECT {
        errorCode: ERROR_CODES
        errorMessage?: string
    };
    if (!loginPage.element) {
        throw new Error("#signin is not a template node");
    } 
    signin.onClick(async (event) => {
        event.preventDefault();
        const response = await signIn(input.value||"");
        input.clearValue();
        if (response.ok) {
            hideError();
            resolver && resolver(true);
        } else {
            if (response.status === STATUS_CODES.UNAUTHORIZED) {
                const error:ERROR_OBJECT = await response.json();
                if (error.errorCode === ERROR_CODES.WRONG_USER_NAME) {
                    displayError(USER_NAME_ERROR_MESSAGE);
                    return;
                }
            }
            displayError(UNEXPECTED_ERROR_MESSAGE);
        }
    });

    parentElement.append(loginPage);
    return new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
    });
};

export default displayLoginPage;