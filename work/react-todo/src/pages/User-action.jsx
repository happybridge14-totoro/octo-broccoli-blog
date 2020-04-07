import React, {useState, memo, useCallback, useEffect} from "react";
import {EVENTS, dispatch} from "../utils/event";
import ThemeContext, {DEFAULT_THEME, LIGHT_THEME} from "../theme-context";
import { useContext } from "react";
import api from "../proxy";
import { STATUS_CODES } from "../utils/error-status";
import { ERROR_TYPE } from "./Error-message";

const SIGN_OUT_URL = "session";
const THEME_URL = "/theme/";

const UserActions = memo(({username}) => {
    const storedTheme = useContext(ThemeContext);
    const [theme, setTheme] = useState(storedTheme.theme);
    useEffect(() => {
        setTheme(storedTheme.theme);
    }, [storedTheme])
    let isSubmitting = false;
    const changeTheme = useCallback((targetTheme) => {
        if (!isSubmitting) {
            isSubmitting = true;
            api.put(THEME_URL + username, {theme: targetTheme}).then(() => {
                setTheme(targetTheme);
                isSubmitting = false;
                dispatch(EVENTS.SET_THEME, targetTheme);
            }).catch((response)=>{
                isSubmitting = false;
                if (response.status === STATUS_CODES.BAD_RQUEST) {
                    dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
                } else if (response.status === STATUS_CODES.FORBIDDEN || response.status === STATUS_CODES.UNAUTHORIZED) {
                    dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                    dispatch(EVENTS.REFRESH);
                }
            });
        }
    }, [username, setTheme])
    const logout = useCallback(()=>{
        api.delete(SIGN_OUT_URL).finally(()=>{
            dispatch(EVENTS.REFRESH);
        });
    });
    return (
        <div className="user-action">
            <input type="radio" 
                name="theme" 
                value={DEFAULT_THEME}
                id="default"
                onChange={()=>{changeTheme(DEFAULT_THEME);}}
                checked={theme===DEFAULT_THEME}/>
            <label htmlFor="default">{DEFAULT_THEME}</label>
            <input type="radio" 
                name="theme" 
                value={LIGHT_THEME}
                id="light"
                onChange={()=>{changeTheme(LIGHT_THEME);}}
                checked={theme===LIGHT_THEME}/>
            <label htmlFor="light">{LIGHT_THEME}</label>
            <button onClick={logout} className="logout">Logout</button>
        </div>
    );
});

export default UserActions;