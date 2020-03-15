import $ from "../utils/mini-jquery.js";
const URL = "/session";

const signIn = (userName: string) => {
    return $.post(URL, {userName});
};

const signOut = () => {
    return $.delete(URL);
};

export default {signIn, signOut};