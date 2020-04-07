import React, {useState, memo, useEffect} from "react";
import {EVENTS, addEventListener, removeEventListener} from "../utils/event";

export const ERROR_TYPE = {
    USER_NAME_ERROR: 0,
    NETWORK_ERROR: 1,
    RECIPE_ID_ERROR: 2,
    SESSION_ERROR: 3,
    RECIPE_PARAM_ERROR: 4,
    UNEXPECTED_ERROR: 5,
};
const getErrorMessage = (type) => {
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
            message = "Something went wrong!"
            break;
    }
    return message;
};

const ErrorMessage = memo(() => {
    const [errorText, setErrorText] = useState("");
    useEffect(() => {
        const displayError = (errorType) => {
            console.log("here?");
            setErrorText(getErrorMessage(errorType));
        };
        const hideError = () => {
            console.log("hide?");
            setErrorText("");
        };
        addEventListener(EVENTS.DISPLAY_ERROR, displayError);
        addEventListener(EVENTS.HIDE_ERROR, hideError);
        return ()=>{
            removeEventListener(EVENTS.DISPLAY_ERROR, displayError);
            removeEventListener(EVENTS.HIDE_ERROR, hideError);
        };
    }, []);

    return (
        <div className={`error ${errorText === "" ? "" : "display"}`}>
            {errorText}
        </div>
    );
});

export default ErrorMessage;