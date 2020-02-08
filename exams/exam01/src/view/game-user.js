const title = "Welcome to word guess game!";

const personalTitleNotLogin = "Login to change the theme";
const personalTitleLogin = "Welcome back, ";

const update = () => {

};
const getTitle = () => {
    return title;
};
const getPersonTitle = (user) => {
    return user ? personalTitleLogin + user.name + "!" : personalTitleNotLogin;
};
modules.exports = {getTitle, getPersonTitle};