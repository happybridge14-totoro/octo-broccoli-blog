import $ from "../utils/mini-jquery.js";
const URL = "/session";
const signIn = (userName) => {
    return $.post(URL, { userName });
};
const signOut = () => {
    return $.delete(URL);
};
export { signIn, signOut };
