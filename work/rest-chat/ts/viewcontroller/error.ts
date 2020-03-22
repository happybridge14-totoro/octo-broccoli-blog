import $, {MiniJquery} from "../utils/mini-jquery";

const CLASS_DISPLAY = "display";
const errorview:MiniJquery = $(".error");

const displayError = (message:string) => {
    errorview.text = message;
    errorview.addClass(CLASS_DISPLAY);
};
const hideError = () => {
    errorview.text = "";
    errorview.removeClass(CLASS_DISPLAY);
};

export {displayError, hideError};
