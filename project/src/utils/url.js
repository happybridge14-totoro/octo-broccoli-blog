const SESSION = "/session";
const USER = "/user";
const ARTICLE = "/article";
const THUMBSUP = "/thumbsup";


const getSessionUrl = () => {
    return SESSION;
};
const getUserUrl = (userid) => {
    return `${USER}/${userid}`;
};

const getArticleUrl = (articleId) => {
    if (articleId) {
        return `${ARTICLE}/${articleId}`;
    } else {
        return ARTICLE;
    }
};
const getThumbsupUrl = (articleId) => {
    return `${ARTICLE}/${articleId}${THUMBSUP}`;
};

export { getSessionUrl, getUserUrl, getArticleUrl, getThumbsupUrl };