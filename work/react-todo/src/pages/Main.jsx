import React, {useState, memo, useEffect, useCallback} from "react";
import { EVENTS, addEventListener, removeEventListener, dispatch } from "../utils/event"
import api from "../proxy";
import ErrorMessage, {ERROR_TYPE} from "./Error-message";
import { STATUS_CODES } from "../utils/error-status";
import Login from "./Login";
import Todo from "./Todo";

const SESSION_URL = "/session";

const Main = memo(() => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const refreshPage = useCallback(() => {
        api.get(SESSION_URL).then((data)=>{
            setIsLoggedIn(true);
        }).catch((response) => {
            setIsLoggedIn(false);
            if (response.status !== STATUS_CODES.UNAUTHORIZED) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        });
        }, [setIsLoggedIn]);
    useEffect(() => {
        refreshPage();
        addEventListener(EVENTS.REFRESH, refreshPage);
        return () => {
            removeEventListener(EVENTS.REFRESH, refreshPage);
        };
    }, [refreshPage])

    return (<div id="stage">
        <ErrorMessage></ErrorMessage>
        {isLoggedIn ? <Todo></Todo> : <Login></Login>}
    </div>);
});

export default Main;