import React, {useState, memo, useEffect} from "react";

import {EVENTS, addEventListener, removeEventListener} from "../utils/event";
import {ERROR_TYPE} from "../utils/error-status";

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
            message = "Invalid user! Please login again!";
            break;
        case ERROR_TYPE.TASK_PARAM_ERROR:
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
            setErrorText(getErrorMessage(errorType));
        };
        const hideError = () => {
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