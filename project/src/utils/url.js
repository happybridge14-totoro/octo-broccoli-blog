const SESSION = "/session";
const USER = "/user";
const ARTICLE = "/article";
const THUMBSUP = "/thumbsup";

const USER_PROPERTY = {
    DISPLAYNAME: "displayName",
    THEME: "theme",
    CONTACTINFO: "contactInfo",
    SKILLS: "skills",
    EDUCATION: "education",
    EXPERIENCE: "experience",
};
const USER_CONTACT_PROPERTY = {
    EMAIL: "email",
    GITHUB: "github",
    LINKEDIN: "linkedin",
    AREA: "github",
    DESCRIPTION: "description",
};
const getSessionUrl = () => {
    return SESSION;
};
const getUserUrl = (userid, attribute) => {
    if (attribute) {
        return `${USER}/${userid}/${attribute}`;
    } else {
        return `${USER}/${userid}`;
    }
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

export {
    getSessionUrl,
    getUserUrl,
    getArticleUrl,
    getThumbsupUrl,
    USER_PROPERTY,
    USER_CONTACT_PROPERTY
};