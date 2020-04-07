import React from 'react';
import './App.css';
import Main from "./pages/Main";
import { useState } from 'react';

const DARK_THEME = "dark-theme";
const LIGHT_THEME = "light-theme";

function App() {
  const [theme, setTheme] = useState(DARK_THEME);
  return (
    <div className={`${theme} App`}>
      <header>
          <h2>Chat System</h2>
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
