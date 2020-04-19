import React, {useState, useEffect, useCallback, useMemo} from 'react';

import ThemeContext, {LIGHT_THEME, DEFAULT_THEME, DARK_THEME} from "./context/theme-context";
import UserContext from "./context/user-context";

import ErrorMessage from "./components/Error-message";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
// import Footer from "./components/Footer";

import { EVENTS, addEventListener, removeEventListener, dispatch } from './utils/event';
import { STATUS_CODES, ERROR_TYPE } from "./utils/error-status";
import { getSessionUrl, getUserUrl } from "./utils/url";
import api from "./utils/proxy";

import './App.css';
// import Main from "./pages/Main";

const THEME_SUFFIX = "-theme";

const HOME_PAGE = "home";
const LOGIN_PAGE = "login";
const PROFILE_PAGE = "profile";

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(HOME_PAGE);
  const refreshUser = useCallback(() => {
    api.get(getSessionUrl()).then(({ userid }) => {
      return api.get(getUserUrl(userid));
    }).then(({ user }) => {
      setUser(user);
    }).catch((response) => {
      if (response.status === STATUS_CODES.NETWORK_ERROR) {
        dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
      } else {
        setUser(null);
      }
    });
  }, []);
  const refresh = useCallback(() => {
    setPage(HOME_PAGE);
    refreshUser();
  }, [refreshUser]);

  useEffect(() => {
    addEventListener(EVENTS.REFRESH, refresh);
    return () => {
      removeEventListener(EVENTS.REFRESH, refresh);
    };
  }, [refreshUser]);

  useEffect(() => {
    const changeTheme = (theme) => {
      if (theme !== LIGHT_THEME && theme !== DARK_THEME) {
        theme = DEFAULT_THEME;
      }
      setTheme(theme);
    };
    addEventListener(EVENTS.SET_THEME, changeTheme);
    return () => {
      removeEventListener(EVENTS.SET_THEME, changeTheme);
    };
  }, [setTheme]);

  const navigation = useMemo(() => {
    if (user) {
      return (<ol>
        <li className="nav" onClick={() => {setPage(HOME_PAGE)}}>Home</li>
        <li className="nav">Profile</li>
        <li className="nav signin">Sign Out</li>
      </ol>);
    } else {
      return (<ol>
        <li className="nav" onClick={()=>{setPage(HOME_PAGE)}}>Home</li>
        <li className="nav signin" onClick={()=>{setPage(LOGIN_PAGE)}}>Sign In</li>
      </ol>);
    }
  }, [user]);

  const main = useMemo(()=>{
    let pageRender = <Home></Home>;
    switch (page) {
      case LOGIN_PAGE:
        pageRender = <Login></Login>;
        break;
      case PROFILE_PAGE:
        pageRender = <Home></Home>;
        break;
      case HOME_PAGE:
      default:
        break;
    }
    return pageRender;
  }, [page]);

  return (
      <div className={`${theme + THEME_SUFFIX} App`}>
        <UserContext.Provider value={user}>
        <header>
          <nav className="navigations">
            <img src="/logo.png" alt="blog logo" className="logo-title"/>
            <h2>Welcome to my Blog</h2>
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