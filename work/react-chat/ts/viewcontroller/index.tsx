import {getMessage}  from "../model/chat";
import { messageBody } from "../model/dataInterface";
import { STATUS_CODES, ERROR_CODES, ERROR_OBJECT } from "../utils/status-error-codes";
import {EVENTS, addEventListener, removeEventListener} from "../utils/event";
// import {displayError, hideError, ERROR_TYPE} from "./error";

import "./index.module.css";

import * as React from "react";
import {memo, useState, useEffect, useRef, useCallback} from "react";

enum PAGES {
    INIT,
    LOGIN,
    CHAT
};

export const Index = memo(() => {
    const [currentPage, setCurrentPage] = useState(PAGES.INIT);
    const loadingEl = useRef<HTMLInputElement>(null);
    const showLoading = (show:boolean) => {
        if (loadingEl && loadingEl.current) {
            loadingEl.current.hidden = show;
        }
    };
    useEffect(() => {
        const checkUser = async () => {
            try {
                showLoading(true);
                const response:Response = await getMessage();
                showLoading(false);
                if (response.ok) {
                    // hideError();
                    const chat = await response.json();
                    // displayPage(PAGES.CHAT, chat);
                } else if (response.status === STATUS_CODES.UNAUTHORIZED){
                    const errorMessage:ERROR_OBJECT = await response.json();
                    if (errorMessage.errorCode === ERROR_CODES.WRONG_USER_ID) {
                        // displayError(ERROR_TYPE.SESSION_ERROR);
                    } else {
                        // hideError();
                    }
                    // displayPage(PAGES.LOGIN);
                } else {
                    console.error("Unexpect error!");
                }
            } catch(e) {
                // displayError(ERROR_TYPE.NETWORK_ERROR)
                showLoading(false);
            }
        };
        addEventListener(EVENTS.REFRESH, checkUser);
        return () => {
            removeEventListener(EVENTS.REFRESH, checkUser);
        };
    }, []);
    const renderContent = useCallback(() => {
        return (<div></div>);
        // if (currentPage === PAGES.LOGIN) {
        //     return (<LOGIN></LOGIN>);
        // } else {
        //     return (<CHAT></CHAT>);
        // }
    }, [currentPage])
    return (<div className="stage">
        {/* <Error></Error> */}
        <div className="loading" ref={loadingEl}>Loading...</div>
        {renderContent()}
    </div>);
});