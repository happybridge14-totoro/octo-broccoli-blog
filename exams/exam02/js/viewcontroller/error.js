import $ from "../utils/mini-jquery";
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE[ERROR_TYPE["USER_NAME_ERROR"] = 0] = "USER_NAME_ERROR";
    ERROR_TYPE[ERROR_TYPE["UNEXPECTED_ERROR"] = 1] = "UNEXPECTED_ERROR";
    ERROR_TYPE[ERROR_TYPE["NETWORK_ERROR"] = 2] = "NETWORK_ERROR";
    ERROR_TYPE[ERROR_TYPE["RECIPE_ID_ERROR"] = 3] = "RECIPE_ID_ERROR";
    ERROR_TYPE[ERROR_TYPE["RECIPE_PARAM_ERROR"] = 4] = "RECIPE_PARAM_ERROR";
    ERROR_TYPE[ERROR_TYPE["SESSION_ERROR"] = 5] = "SESSION_ERROR";
})(ERROR_TYPE || (ERROR_TYPE = {}));
;
const getErrorMessage = (type) => {
    let message = "";
    switch (type) {
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
            "Something went wrong!";
            break;
    }
    return message;
};
const CLASS_DISPLAY = "display";
const errorview = $(".error");
const displayError = (type) => {
    errorview.text = getErrorMessage(type);
    errorview.addClass(CLASS_DISPLAY);
};
const hideError = () => {
    errorview.text = "";
    errorview.removeClass(CLASS_DISPLAY);
};
export { displayError, hideError, ERROR_TYPE };
