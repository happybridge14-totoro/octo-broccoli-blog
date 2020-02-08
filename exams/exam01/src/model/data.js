const generatUUID = require("./utils/uuid-generator");
const words = require("./words");

const allUsersInfo = {};
const sessionStorage = {};

const themes = ["light, dark"];
const defaultThemeId = 0;

let gameId = 0;
const games = {};
//User apis
const hasUser = (id) => {
    return !!allUsersInfo[id];
};
const getUserByID = (id) => {
    return allUsersInfo[id];
};
const getUserByName = (name) => {
    for (let user of Object.values(allUsersInfo)) {
        if (user.name === name) return user;
    }
    return null;
};
const addUser = (name) => {
    if (!getUserByName(name)) {
        allUsersInfo[name] = {
            id: name,
            name: name,
            themeId: defaultThemeId
        };
    }
};
const changeThemeAndGetUser = (id) => {
    const user = allUsersInfo[id];
    if (!!user) {
        user.themeId = getNextThemeId(user.themeId);
    }
    return null;
};
//Theme apis
const getNextThemeId = (currentThemeId) => {
    const nextThemeId = (currentThemeId + 1) % themes.length; 
    return nextThemeId;
};
const getThemeNameById = (id) => {
    return themes[id];
};
//Session apis
const createAndGetSession = (userId, wordId) => {
    const sessionId = generatUUID();
    const gameId = createNewGame();
    const session = { sessionId, userId, wordId };
    sessionStorage[sessionId] = session;
    return session;
};
const updateSession = (sessionId, userId) => {

};
const clearSession = (id) => {
    delete sessionStorage[id];
};
//Game apis
const removeGame = (id) => {
    delete games[id];
};
const createNewGame = () => {
    const id = ++gameId;
    const newGame = {
        id: id,
        wordId: getRandomWord(),
        steps: [],
        finished: false
    };
    games[id] = newGame;
    return newGame;
};
const updateSteps = (id, wordGuess, isFinished = false) => {
    const game = games[id];
    game.steps.push(wordGuess);
    game.finished = isFinished;
};
const getRandomWord = () => {
    return Math.floor(Math.random() * words.length);
};
const getWordById = (id) => {
    return words[id];
};

module.exports = {
    theme: {
        getThemeNameById
    },
    user: {
        hasUser,
        getUserByID,
        addUser,
        changeThemeAndGetUser
    },
    session: {
        createAndGetSession,
        clearSession
    },
    game: {
        createNewGame,
        getWordById,
        updateSteps
    }
};