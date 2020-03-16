import { signIn } from "../model/login.js";
import $ from "../utils/mini-jquery.js";
import { displayError, hideError } from "./error.js";
const USER_NAME_ERROR_MESSAGE = "User name is not valid!";
const UNEXPECTED_ERROR_MESSAGE = "Something went wrong!";
const template = $("#login");
const displayLoginPage = (parentElement) => {
    const loginPage = template.templateClone || $();
    const input = loginPage.find("#user-name") || $();
    const signin = loginPage.find(".signin") || $();
    let resolver;
    let rejecter;
    if (!loginPage.element) {
        throw new Error("#signin is not a template node");
    }
    signin.onClick(async (event) => {
        event.preventDefault();
        const response = await signIn(input.value || "");
        input.clearValue();
        if (response.ok) {
            hideError();
            resolver && resolver(true);
        }
        else {
            if (response.status === 401) {
                const error = await response.json();
                if (error.errorCode === 4) {
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
