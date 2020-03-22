import $ from "../utils/mini-jquery";
const URL = "/session";

const signIn = (userName: string):Promise<Response> => {
    return $.post(URL, {userName});
};

const signOut = ():Promise<Response> => {
    return $.delete(URL);
};

export {signIn, signOut};