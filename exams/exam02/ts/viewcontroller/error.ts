import $, {MiniJquery} from "../utils/mini-jquery";

enum ERROR_TYPE {
    USER_NAME_ERROR,
    UNEXPECTED_ERROR
};

const getErrorMessage = (type:ERROR_TYPE):string => {
    let message = "";
    switch(type) {
        case ERROR_TYPE.USER_NAME_ERROR:
            message = "User name is not valid!";
            break;
        case ERROR_TYPE.UNEXPECTED_ERROR:
        default:
            "Something went wrong!"
            break;
    }
    return message;
}



const CLASS_DISPLAY = "display";
const errorview:MiniJquery = $(".error");

const displayError = (type:ERROR_TYPE) => {
    errorview.text = getErrorMessage(type);
    errorview.addClass(CLASS_DISPLAY);
};
const hideError = () => {
    errorview.text = "";
    errorview.removeClass(CLASS_DISPLAY);
};

export {displayError, hideError, ERROR_TYPE};
