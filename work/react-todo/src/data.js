let username = "";
const setUserName = (userName) => {
    username = userName;
};
const getUserName = () => {
    return username;
};

export {setUserName, getUserName};