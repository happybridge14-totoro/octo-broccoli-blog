const generatUUID = require("../utils/uuid-generator");

const users = {};
const usersByName = {};

const EDITABLE_PROPERTY = {
    DISPLAYNAME: "displayName",
    THEME: "theme",
    CONTRACTINFO: "contractInfo",
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
            contractInfo: {
                area: "",
                github: "",
                linkedin: "",
                email: "",
                desciption: ""
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
        thumbsups: [],
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

const thumbsup = (userid, articleid) => {
    const user = users[userid];
    if (user) {
        const idIndex = user.thumbsups.indexOf(articleid);
        if (idIndex === -1) {
            user.thumbsups.push(articleid);
        }
    }
};
const cancelThumbsup = (userid, articleid) => {
    const user = users[userid];
    if (user) {
        const idIndex = user.thumbsups.indexOf(articleid);
        if (idIndex > -1) {
            user.thumbsups.splice(idIndex, 1);
        }
    }
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
            };
        case EDITABLE_PROPERTY.CONTRACTINFO:
            return (userid, newContent) => {
                const user = users[userid];
                if (user) {
                    user.contractInfo = {...user.contractInfo, ...newContent};
                }
            };
        case EDITABLE_PROPERTY.EDUCATION:
        case EDITABLE_PROPERTY.EXPERIENCE:
        case EDITABLE_PROPERTY.SKILLS:
            // Can extend different operations
            return (userid, newContent) => {
                const user = users[userid];
                if (user) {
                    user[property] = newContent;
                }
            };
        default:
            console.error("Wrong property!", property);
            break;
    }
};
module.exports = {getUserById, getOrCreateUserByName, thumbsup, cancelThumbsup, EDITABLE_PROPERTY, updateProperty};