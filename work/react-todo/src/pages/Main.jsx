import React, {useState, memo, useEffect, useCallback} from "react";
import { EVENTS, addEventListener, removeEventListener, dispatch } from "../utils/event"
import api from "../proxy";
import ErrorMessage, {ERROR_TYPE} from "./Error-message";
import { STATUS_CODES } from "../utils/error-status";
import Login from "./Login";
import Todo from "./Todo";
import { DEFAULT_THEME } from "../theme-context";

const SESSION_URL = "/session";

const Main = memo(() => {
    const [userName, setUsername] = useState("");
    const refreshPage = useCallback(() => {
        api.get(SESSION_URL).then(({data})=>{
            const {username, theme} = data;
            setUsername(username);
            dispatch(EVENTS.HIDE_ERROR);
            dispatch(EVENTS.SET_THEME, theme);
        }).catch((response) => {
            setUsername("");
            if (response.status !== STATUS_CODES.UNAUTHORIZED) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
            dispatch(EVENTS.SET_THEME, DEFAULT_THEME);
        });
        }, [setUsername]);
    useEffect(() => {
        refreshPage();
        addEventListener(EVENTS.REFRESH, refreshPage);
        return () => {
            removeEventListener(EVENTS.REFRESH, refreshPage);
        };
    }, [refreshPage])
    console.log("hello", userName);
    return (<div id="stage">
        <ErrorMessage></ErrorMessage>
        {userName === "" ? <Login></Login> : <Todo username={userName}></Todo>}
    </div>);
});

export default Main;