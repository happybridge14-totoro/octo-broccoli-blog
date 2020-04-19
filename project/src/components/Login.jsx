import React, { useState, memo, useCallback } from "react";

import { ERROR_TYPE, STATUS_CODES } from "../utils/error-status";
import { EVENTS, dispatch } from "../utils/event";
import api from "../utils/proxy";
import { getSessionUrl} from "../utils/url";

const Login = memo(() => {
    const [username, setUsername] = useState("");
    const keyPressHandler = useCallback((event) => {
        const value = event.target.value;
        setUsername(value);
    }, [setUsername]);
    const signin = useCallback((event) => {
        event.preventDefault();
        api.post(getSessionUrl(), { username }).then(() => {
            setUsername("");
            dispatch(EVENTS.HIDE_ERROR);
            dispatch(EVENTS.REFRESH);
        }).catch((response) => {
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                setUsername("");
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
            } else if (response.status === STATUS_CODES.BAD_RQUEST) {
                setUsername("");
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.USER_NAME_ERROR);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        });
    }, [username, setUsername]);
    return (
        <div className="login-page">
            <label>
                User Name:
                <input id="user-name" type="text" value={username} onChange={keyPressHandler} minLength={1} />
            </label>
            <button className="signin" onClick={signin}>Sign in</button>
        </div>
    );
});
export default Login;