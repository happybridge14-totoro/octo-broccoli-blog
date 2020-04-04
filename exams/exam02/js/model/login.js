import $ from "../utils/mini-jquery";
const URL = "/session";
const signIn = (userName) => {
    return $.post(URL, { userName });
};
const signOut = () => {
    return $.delete(URL);
};
const check = () => {
    return $.get(URL);
};
export { signIn, signOut, check };
