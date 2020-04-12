import * as React from "react";
const {memo, useState, useEffect} = React;
import {EVENTS, addEventListener, removeEventListener} from "../utils/event";

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

const ErrorMessage = memo(() => {
    const [errorText, setErrorTest] = useState("");
    useEffect(() => {
        const displayError = (errorType:ERROR_TYPE) => {
            setErrorTest(getErrorMessage(errorType));
        };
        const hideError = () => {
            setErrorTest("");
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
export {ErrorMessage, ERROR_TYPE};