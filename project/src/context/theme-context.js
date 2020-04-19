import {createContext} from "react";
export const DEFAULT_THEME = "dark";
export const LIGHT_THEME = "light";
export const DARK_THEME = "light";
const ThemeContext = createContext({ theme: DEFAULT_THEME });
export default ThemeContext;
