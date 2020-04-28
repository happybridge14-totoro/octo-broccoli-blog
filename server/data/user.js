const generatUUID = require("../utils/uuid-generator");

const users = {};
const usersByName = {};

const EDITABLE_PROPERTY = {
    DISPLAYNAME: "displayName",
    THEME: "theme",
    CONTACTINFO: "contactInfo",
    SKILLS: "skills",
    EDUCATION: "education",
    EXPERIENCE: "experience",
};
const createUser = (username) => {
    const uid = generatUUID();
    const user = {
        id: uid,
        username,
        displayName: username,
        theme: "",
        profile: {
            contactInfo: {
                area: "",
                github: "",
                linkedin: "",
                email: "",
                description: ""
            },
            skills: [{
                field: "",
                details: [],
            }],
            education: [{
                universityName: "",
                major: "",
                to: [],
            }],
            experience: [{
                companyName: "",
                title: "",
                desciptions: [],
                from: [],
                to: [],
            }]
        },
        // thumbsups: [],
    };
    users[uid] = user;
    usersByName[username] = user;
    return user;
};

const getOrCreateUserByName = (username) => {
    let user = usersByName[username];
    if (!user) {
        user = createUser(username);
    }
    return user;
};

const getUserById = (userid) => {
    let user = users[userid];
    if (!user) {
        user = null;
    }
    return user;
};

const userThumbsup = (userid, articleid) => {
    const user = users[userid];
    if (user) {
        const idIndex = user.thumbsups.indexOf(articleid);
        if (idIndex === -1) {
            user.thumbsups.push(articleid);
            return true;
        }
    }
    return false;
};
const userCancelThumbsup = (userid, articleid) => {
    const user = users[userid];
    if (user) {
        const idIndex = user.thumbsups.indexOf(articleid);
        if (idIndex > -1) {
            user.thumbsups.splice(idIndex, 1);
            return true;
        }
    }
    return false;
};

const updateProperty = (property) => {
    switch (property) {
        case EDITABLE_PROPERTY.DISPLAYNAME:
        case EDITABLE_PROPERTY.THEME:
            return (userid, newContent) => {
                const user = users[userid];
                if (user) {
                    user[property] = newContent;
                }
                return user;
            };
        case EDITABLE_PROPERTY.CONTACTINFO:
            return (userid, newContent) => {
                const user = users[userid];
                if (user && user.profile) {
                    const oldProfile = user.profile;
                    user.profile.contactInfo = {
                        ...oldProfile.contactInfo,
                        ...newContent
                    };
                }
                return user;
            };
        case EDITABLE_PROPERTY.EDUCATION:
        case EDITABLE_PROPERTY.EXPERIENCE:
        case EDITABLE_PROPERTY.SKILLS:
            // Can extend different operations
            return (userid, newContent) => {
                const user = users[userid];
                if (user && user.profile) {
                    user.profile[property] = newContent;
                }
                return user;
            };
        default:
            console.error("Wrong property!", property);
            break;
    }
};
module.exports = {
    getUserById,
    getOrCreateUserByName,
    userThumbsup,
    userCancelThumbsup,
    EDITABLE_PROPERTY,
    updateProperty
};