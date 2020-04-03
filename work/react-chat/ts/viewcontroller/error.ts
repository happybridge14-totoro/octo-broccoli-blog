import $, {MiniJquery} from "../utils/mini-jquery";

const CLASS_DISPLAY = "display";
const errorview:MiniJquery = $(".error");

enum ERROR_TYPE {
    USER_NAME_ERROR,
    UNEXPECTED_ERROR,
    NETWORK_ERROR,
    RECIPE_ID_ERROR,
    RECIPE_PARAM_ERROR,
    SESSION_ERROR,
};

const getErrorMessage = (type:ERROR_TYPE):string => {
    let message = "";
    switch(type) {
        case ERROR_TYPE.USER_NAME_ERROR:
            message = "User name is not valid!";
            break;
        case ERROR_TYPE.NETWORK_ERROR:
            message = "Unable to connect to server! Please try again!";
            break;
        case ERROR_TYPE.RECIPE_ID_ERROR:
            message = "Wrong recipe id!";
            break;
        case ERROR_TYPE.SESSION_ERROR:
            message = "Invalid user!";
            break;
        case ERROR_TYPE.RECIPE_PARAM_ERROR:
            message = "Param error!";
            break;
        case ERROR_TYPE.UNEXPECTED_ERROR:
        default:
            "Something went wrong!"
            break;
    }
    return message;
}
const displayError = (errorType:ERROR_TYPE) => {
    errorview.text = getErrorMessage(errorType);
    errorview.addClass(CLASS_DISPLAY);
};
const hideError = () => {
    errorview.text = "";
    errorview.removeClass(CLASS_DISPLAY);
};

export {displayError, hideError, ERROR_TYPE};
