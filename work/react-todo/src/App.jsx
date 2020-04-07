import React from 'react';
import './App.css';
import Main from "./pages/Main";
import { useState, useEffect } from 'react';
import { EVENTS, addEventListener, removeEventListener } from './utils/event';

const THEME_SUFFIX = "-theme";
const DEFAULT_THEME = "dark";
function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME + THEME_SUFFIX);
  useEffect(() => {
    const changeTheme = (theme) => {
      setTheme(theme + THEME_SUFFIX);
    };
    addEventListener(EVENTS.SET_THEME, changeTheme);
    return () => {
      removeEventListener(EVENTS.SET_THEME, changeTheme);
    };
  }, [setTheme])
  return (
    <div className={`${theme} App`}>
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
                  <a href="mailto:huang.yiji@husky.neu.edu">huang.yiji@husky.neu.edu</a>
              </li>
          </ul>
      </footer>
    </div>
  );
}

export default App;
