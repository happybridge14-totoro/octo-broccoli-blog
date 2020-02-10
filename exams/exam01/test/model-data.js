const assert = require("assert");
const generatUUID = require("../src/utils/uuid-generator");
const {theme, user, session, game} = require("../src/model/dataProxy");
const words = require("../src/model/words");
const {themes, DEFAULT_THEME_ID} = require("../src/model/themes");
const allUsersInfo = require("../src/model/users");
const sessionStorage = require("../src/model/session-storage");
const {games, getNextGameId} = require("../src/model/games");
describe("data.theme", () => {
    describe("#getDefaultThemeName", () => {
        it("respond equal to default theme", () => {
            assert.equal(theme.getDefaultThemeName(), themes[DEFAULT_THEME_ID]);
        });
    });
    describe("#getThemeNameById", ()=>{
        it("id=0, respond equal to themes[0]", () => {
            assert.equal(theme.getThemeNameById(0), themes[0]);
        });
        it("id=1, respond equal to themes[1]", () => {
            assert.equal(theme.getThemeNameById(1), themes[1]);
        });
    });
});
describe("data.user", ()=>{
    let gameIdForTom = 0;
    before(() => {
        const name = "Tom";
        const themeId = DEFAULT_THEME_ID;
        gameIdForTom = getNextGameId();
        allUsersInfo.Tom = {
            id: name,
            name,
            themeId,
            gameId: gameIdForTom
        }
    });
    after(() => {
        delete allUsersInfo.Tom;
        delete allUsersInfo.Jim;
    });
    describe("#getUserByID, no existing user 'Tim'", () => {
        it("respond equal to false with non-existing user 'Tim'", ()=>{
            const userId = "Tim";
            assert.ok(!user.getUserByID(userId));
        });
        it("respond equal to true with userId 'Tom'", () => {
            const userId = "Tom";
            assert.ok(user.getUserByID(userId));
        });
    });
    describe("#addOrGetUserByName", () => {
        it("respond equal to new user 'Jim'", () => {
            const expectedGameId = getNextGameId() + 1;
            const id = "Jim";
            const name = "Jim";
            const expectUser = {
                id,
                name,
                themeId: DEFAULT_THEME_ID,
                gameId: expectedGameId
            };
            assert.deepStrictEqual(user.addOrGetUserByName(name), expectUser);
        });
        it("respond equal to existing user 'Tom'", () => {
            const id = "Tom";
            const name = "Tom";
            const expectUser = {
                id,
                name,
                themeId: DEFAULT_THEME_ID,
                gameId: gameIdForTom
            };
            assert.deepStrictEqual(user.addOrGetUserByName(name), expectUser);
        });
    });
    describe("#changeThemeAndGetUser", () => {
        it("respond equal to expected user record", () => {
            const id = "Tom";
            const name = "Tom";
            const expectUser = {
                id,
                name,
                themeId: DEFAULT_THEME_ID + 1,
                gameId: gameIdForTom
            };
            assert.deepStrictEqual(user.changeThemeAndGetUser(id), expectUser);
        });
    });
    describe("#updateGameIdForUser", () => {
        it("respond equal to expected user record", () => {
            const id = "Tom";
            const name = "Tom";
            const newGameId = 999999;
            const expectUser = {
                id,
                name,
                themeId: DEFAULT_THEME_ID + 1,
                gameId: newGameId
            };
            assert.deepStrictEqual(user.updateGameIdForUser(id, newGameId), expectUser);
        });
    });
});
describe("data.session", () => {
    let initSession = null;
    before(() => {
        const gameId = 9999;
        initSession = session.createAndGetSession(gameId);
    });
    describe("#createAndGetSession", () => {
        it("with certain sessionId, userId, gameId, respond equal to expected session", () => {
            const sessionId = 23;
            const userId = 23;
            const gameId = 23;
            const expectSession = { sessionId, userId, gameId};
            assert.deepStrictEqual(session.createAndGetSession(gameId, userId, sessionId), expectSession);
        });
        it("with gameId and userId, respond equal to expected session", () => {
            const sessionRules = /[0-9a-z]{13}/;
            const userId = "Tom";
            const gameId = 23;
            const newSession = session.createAndGetSession(gameId, userId);
            assert.ok(sessionRules.test(newSession.sessionId) && userId === newSession.userId && gameId === newSession.gameId);
        });
        it("with gameId only, respond equal to expected session", () => {
            const sessionRules = /[0-9a-z]{13}/;
            const userId = "";
            const gameId = 48;
            const newSession = session.createAndGetSession(gameId);
            assert.ok(sessionRules.test(newSession.sessionId) && userId === newSession.userId && gameId === newSession.gameId);
        });
    });
    describe("#getSession", () => {
        it("respond equal to expected session", () => {
            assert.deepStrictEqual(initSession, session.getSession(initSession.sessionId));
        });
        it("respond equal to falsy", () => {
            const sessionId = generatUUID();
            assert.ok(!session.getSession(sessionId));
        });
    });
    describe("#clearSession", () => {
        it("respond equal to falsy", () => {
            session.clearSession(initSession.sessionId);
            assert.ok(!session.getSession(initSession.sessionId));
        });
    });
});
describe("data.game", ()=>{
    let initGame = null;
    before(() => {
        initGame = game.createNewGame();
    });
    describe("#createNewGame", ()=>{
        it("respond equal to expected game", () => {
            const id = getNextGameId() + 1;
            const actualGame = game.createNewGame();
            assert.ok(id === actualGame.id && 
                actualGame.wordId >= 0 && 
                actualGame.wordId <= words.length && 
                Array.isArray(actualGame.steps) &&
                actualGame.steps.length === 0 &&
                actualGame.guessCount === 0 &&
                actualGame.isFinished === false
            );
        });
    });
    describe("#getWordById", () => {
        it("respond equal to expected word", () => {
            const wordId = Math.floor(Math.random() * words.length);
            const word = words[wordId];
            assert.deepStrictEqual(game.getWordById(wordId), word);
        });
    });
    describe("#getGame", () => {
        it("respond equal to expected game", () => {
            assert.deepStrictEqual(game.getGame(initGame.id), initGame);
        });
    });
    describe("#updateSteps", () => {
        it("updateSteps with existing game, respond equal to expected game", () => {
            const guessWord = "foo";
            const message = "bar";
            const correctCount = 2;
            const guessCount = 9;
            const isFinished = true;
            const expectGame = {
                id: initGame.id,
                wordId: initGame.wordId,
                steps: [{
                    guessWord,
                    message,
                    correctCount,
                    guessCount
                }],
                guessCount: guessCount,
                isFinished: isFinished
            };
            game.updateSteps(initGame.id, guessWord, message, correctCount, guessCount, isFinished);
            assert.deepStrictEqual(initGame, expectGame);
        });
        it("updateSteps with non-existing game, respond equal to falsy", () => {
            const gameId = generatUUID();
            game.updateSteps(gameId, "foo", "bar", 0, 0, false);
            assert.ok(!games[gameId]);
        });
    });
});