import React, { useState, useEffect, useCallback, useMemo } from 'react';

import ThemeContext, { DEFAULT_THEME } from "./context/theme-context";
import UserContext from "./context/user-context";

import ErrorMessage from "./components/Error-message";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { EVENTS, addEventListener, removeEventListener, dispatch } from './utils/event';
import { STATUS_CODES, ERROR_TYPE } from "./utils/error-status";
import { getSessionUrl, getUserUrl } from "./utils/url";
import api from "./utils/proxy";

import './App.css';

const THEME_SUFFIX = "-theme";

const HOME_PAGE = "home";
const LOGIN_PAGE = "login";
const PROFILE_PAGE = "profile";

function App() {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState(HOME_PAGE);
    const [theme, setTheme] = useState(DEFAULT_THEME);
    const refreshUser = useCallback(() => {
        api.get(getSessionUrl()).then(({ userid }) => {
            return api.get(getUserUrl(userid));
        }).then(({ user }) => {
            dispatch(EVENTS.HIDE_ERROR);
            setUser(user);
            setTheme(user.theme || DEFAULT_THEME);
        }).catch((response) => {
            if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            } else {
                setUser(null);
                setTheme(DEFAULT_THEME);
            }
        });
    }, []);
    const refresh = useCallback(() => {
        setPage(HOME_PAGE);
        refreshUser();
    }, [refreshUser]);

    const signOut = useCallback(() => {
        api.delete(getSessionUrl()).finally(() => {
            setPage(HOME_PAGE);
            setUser(null);
            setTheme(DEFAULT_THEME);
        });
    }, []);

    useEffect(() => {
        refresh();
        const updateUser = (user) => {
            setUser(user);
            setTheme(user.theme || DEFAULT_THEME);
        };
        addEventListener(EVENTS.REFRESH, refresh);
        addEventListener(EVENTS.CHECK_USER, refreshUser);
        addEventListener(EVENTS.UPDATE_USER, updateUser);
        return () => {
            removeEventListener(EVENTS.REFRESH, refresh);
            removeEventListener(EVENTS.CHECK_USER, refreshUser);
            removeEventListener(EVENTS.UPDATE_USER, updateUser);
        };
    }, [refresh, refreshUser]);

    const navigation = useMemo(() => {
        if (user) {
            return (<ol>
                <li className="nav" onClick={() => { setPage(HOME_PAGE) }}>Blog</li>
                <li className="nav" onClick={() => { setPage(PROFILE_PAGE) }}>Profile</li>
                <li className="nav" onClick={() => { signOut() }}>Sign Out</li>
            </ol>);
        } else {
            return (<ol>
                <li className="nav" onClick={() => { setPage(HOME_PAGE) }}>Blog</li>
                <li className="nav" onClick={() => { setPage(LOGIN_PAGE) }}>Sign In</li>
            </ol>);
        }
    }, [user, signOut]);

    const main = useMemo(() => {
        let pageRender;
        switch (page) {
            case LOGIN_PAGE:
                pageRender = <Login></Login>;
                break;
            case PROFILE_PAGE:
                pageRender = <Profile></Profile>;
                break;
            case HOME_PAGE:
            default:
                pageRender = <Home></Home>;
                break;
        }
        return pageRender;
    }, [page]);

    return (
        <div className={`${theme + THEME_SUFFIX} App`}>
            <UserContext.Provider value={user}>
                <header>
                    <nav className="navigations">
                        <img src="/logo.png" alt="blog logo" className="logo-title" />
                        <h1>Welcome{user ? ", " + user.displayName : " to my Blog"}</h1>
                        {navigation}
                    </nav>
                </header>
                <main>
                    <ErrorMessage></ErrorMessage>
                    <ThemeContext.Provider value={theme}>
                        {main}
                    </ThemeContext.Provider>
                </main>
            </UserContext.Provider>
            <Footer></Footer>
        </div>
    );
}

export default App;