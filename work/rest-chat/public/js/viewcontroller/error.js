import $ from "../utils/mini-jquery.js";
const CLASS_DISPLAY = "display";
const errorview = $(".error");
const displayError = (message) => {
    errorview.text = message;
    errorview.addClass(CLASS_DISPLAY);
};
const hideError = () => {
    errorview.text = "";
    errorview.removeClass(CLASS_DISPLAY);
};
export { displayError, hideError };
