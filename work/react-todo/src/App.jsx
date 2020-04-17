import React, { useState, useEffect }  from 'react';

import { EVENTS, addEventListener, removeEventListener } from './utils/event';
import ThemeContext, {DEFAULT_THEME, LIGHT_THEME} from "./theme-context";

import './App.css';
import Main from "./pages/Main";

const THEME_SUFFIX = "-theme";
function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  useEffect(() => {
    const changeTheme = (theme) => {
      if (theme !== LIGHT_THEME) {
        theme = DEFAULT_THEME;
      }
      setTheme(theme);
    };
    addEventListener(EVENTS.SET_THEME, changeTheme);
    return () => {
      removeEventListener(EVENTS.SET_THEME, changeTheme);
    };
  }, [setTheme])
  return (
    <ThemeContext.Provider value={{theme}}>
      <div className={`${theme+THEME_SUFFIX} App`}>
        <header>
            <h2>TODO APP</h2>
        </header>
        <main>
          <Main></Main>
        </main>
        <footer>
            <ul className="footer-personal-info">
                <li>© 2020 Yiji Huang</li>
                <li className="footer-divider"></li>
                <li>
                    <span>E-mail: </span>
                    <a href="mailto:huang.yiji@northeastern.edu">huang.yiji@northeastern.edu</a>
                </li>
            </ul>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
