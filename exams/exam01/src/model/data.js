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
const addOrGetUserByName = (name) => {
    let user = getUserByName(name);
    if (!user) {
        const gameId = createNewGame().id;
        user = {
            id: name,
            name: name,
            themeId: defaultThemeId,
            gameId: gameId
        };
        allUsersInfo[name] = user;
    }
    return user;
};
const changeThemeAndGetUser = (id) => {
    const user = allUsersInfo[id];
    if (user) {
        user.themeId = getNextThemeId(user.themeId);
    }
    return user;
};
const updateGameIdForUser = (userId, gameId) => {
    const user = allUsersInfo[userId];
    if (user) {
        user.gameId = gameId;
    }
    return user;
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
const createAndGetSession = (gameId, userId = "", sessionId = generatUUID()) => {
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
        guessCount: 0,
        isFinished: false
    };
    //As request, "The server will console.log the current secret word at the start of the game."
    console.log(words[newGame.wordId]);
    ////////
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
    game.guessCount = Math.max(guessCount, game.guessCount);
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
        addOrGetUserByName,
        changeThemeAndGetUser,
        updateGameIdForUser
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