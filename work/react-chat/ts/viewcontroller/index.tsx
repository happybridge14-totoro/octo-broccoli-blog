import * as React from "react";
const {memo, useState, useEffect, useRef, useCallback} = React;

import {getMessage}  from "../model/chat";
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes";
import {EVENTS, addEventListener, removeEventListener, dispatch} from "../utils/event";
import {ErrorMessage, ERROR_TYPE} from "./error-message";
import {Login} from "./login";
import {Chat} from "./chat";
import { messageBody } from "../model/dataInterface";

enum PAGES {
    INIT,
    LOGIN,
    CHAT
};

export const Index = memo(() => {
    const [currentPage, setCurrentPage] = useState(PAGES.INIT);
    const loadingEl = useRef<HTMLInputElement>(null);
    const showLoading = useCallback((show:boolean) => {
        if (loadingEl && loadingEl.current) {
            loadingEl.current.hidden = !show;
        }
    }, [loadingEl]);
    const [chatData, setChatData] = useState<Array<messageBody>>([]);
    useEffect(() => {
        const checkUser = async () => {
            try {
                showLoading(true);
                const response:Response = await getMessage();
                showLoading(false);
                if (response.ok) {
                    dispatch(EVENTS.HIDE_ERROR);
                    const chat:Array<messageBody> = await response.json();
                    setChatData(chat);
                    setCurrentPage(PAGES.CHAT);
                } else if (response.status === STATUS_CODES.UNAUTHORIZED){
                    const errorMessage:ERROR_OBJECT = await response.json();
                    if (errorMessage.errorCode === ERROR_CODES.WRONG_USER_ID) {
                        dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
                    } else {
                        dispatch(EVENTS.HIDE_ERROR);
                    }
                    setCurrentPage(PAGES.LOGIN);
                } else {
                    dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.UNEXPECTED_ERROR);
                }
            } catch(e) {
                showLoading(false);
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        };
        checkUser();
        addEventListener(EVENTS.REFRESH, checkUser);
        return () => {
            removeEventListener(EVENTS.REFRESH, checkUser);
        };
    }, []);
    const renderContent = useCallback(() => {
        if (currentPage === PAGES.LOGIN) {
            return (<Login></Login>);
        } else if (currentPage === PAGES.CHAT) {
            return (<Chat data={chatData}></Chat>);
        } else {
            return "";
        }
    }, [currentPage]);

    return (
        <div className="stage">
            <ErrorMessage></ErrorMessage>
            <div className="loading" ref={loadingEl}>Loading...</div>
            {renderContent()}
        </div>
    );
});