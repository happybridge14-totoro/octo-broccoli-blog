const generatUUID = require("../utils/uuid-generator");
const words = require("./words");

const allUsersInfo = {};
const sessionStorage = {};

const themes = ["light", "dark"];
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
const getDefaultThemeName = (id) => {
    return themes[defaultThemeId];
};
//Session apis
const createAndGetSession = (sessionId = generatUUID(), userId = "") => {
    const gameId = createNewGame().id;
    const session = { sessionId, userId, gameId};
    sessionStorage[sessionId] = session;
    return session;
};
const getSession = (sessionId) => {
    return sessionStorage[sessionId];
};
const clearSession = (id) => {
    delete sessionStorage[id];
};
//Game apis
const getGame = (id) => {
    return games[id];
};
const removeGame = (id) => {
    delete games[id];
};
const createNewGame = () => {
    const id = ++gameId;
    const newGame = {
        id: id,
        wordId: getRandomWord(),
        steps: [],
        isFinished: false
    };
    games[id] = newGame;
    return newGame;
};
const updateSteps = (gameId, guessWord, message, correctCount, guessCount, isFinished = false) => {
    const game = games[gameId];
    game.steps.push({
        guessWord,
        message,
        correctCount,
        guessCount
    });
    game.isFinished = isFinished;
};
const getRandomWord = () => {
    return Math.floor(Math.random() * words.length);
};
const getWordById = (id) => {
    return words[id];
};

module.exports = {
    theme: {
        getThemeNameById,
        getDefaultThemeName
    },
    user: {
        hasUser,
        getUserByID,
        addUser,
        changeThemeAndGetUser
    },
    session: {
        createAndGetSession,
        clearSession,
        getSession
    },
    game: {
        createNewGame,
        getWordById,
        updateSteps,
        getGame
    }
};