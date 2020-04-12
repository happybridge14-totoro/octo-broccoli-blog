import api from "../utils/api";
const URL = "/session";

const signIn = (userName: string):Promise<Response> => {
    return api.post(URL, {userName});
};

const signOut = ():Promise<Response> => {
    return api.delete(URL);
};

export {signIn, signOut};