import * as React from "react";
const {memo, useState, useCallback} = React;

import {signIn} from "../model/login";
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes";
import {EVENTS, dispatch} from "../utils/event";
import {ERROR_TYPE} from "./error-message";

export const Login = memo(() => {
    const [userName, setUserName] = useState("");
    const keyPressHandler = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setUserName(value);
    }, [setUserName]);
    const signin = async (event:React.MouseEvent) => {
        event.preventDefault();
        try {
            const response = await signIn(userName);
            setUserName("");
            if (response.ok) {
                dispatch(EVENTS.HIDE_ERROR);
                dispatch(EVENTS.REFRESH);
            } else {
                if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                    const error:ERROR_OBJECT = await response.json();
                    if (error.errorCode === ERROR_CODES.WRONG_USER_NAME) {
                        dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.USER_NAME_ERROR);
                        return;
                    }
                }
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.UNEXPECTED_ERROR);
            }
        } catch(e) {
            dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
        }
    };
    return (
        <div className="login-page">
            <label>
                User Name:
                <input id="user-name" type="text" value={userName} onChange={keyPressHandler}/>
            </label>
            <button className="signin" onClick={signin}>submit</button>
        </div>
    );
});