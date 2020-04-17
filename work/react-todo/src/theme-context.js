import {createContext} from "react";
const ThemeContext = createContext({theme: "dark"});
export const DEFAULT_THEME = "dark";
export const LIGHT_THEME = "light";
export default ThemeContext;
