const indexHtmlTemplate = require("./index-template");

const data = require("./model/dataProxy");
const renderInitPage = require("./view/init");
const renderGamePage = require("./view/game");

const render = (sessionId) => {
    const session = data.session.getSession(sessionId);
    if (session) {
        const {userId, gameId} = data.session.getSession(sessionId);
        const user = data.user.getUserByID(userId);
        const game = data.game.getGame(gameId);
        const words = data.game.getWords();
        return indexHtmlTemplate.replace(/{[^}]+}/g, (match) => {
            let ret = match;
            switch (match) {
                case "{theme}":
                    if (user && user.themeId) {
                        ret = data.theme.getThemeNameById(user.themeId);
                    } else {
                        ret = data.theme.getDefaultThemeName();
                    }
                    break;
                case "{body}":
                    return renderGamePage(game.steps, game.isFinished, user, words);
                default:
                    break;
            }
            return ret;
        });
    } else {
        return indexHtmlTemplate.replace(/{[^}]+}/g, (match) => {
            let ret = match;
            switch (match) {
                case "{theme}":
                    ret = data.theme.getDefaultThemeName();
                    break;
                case "{body}":
                    ret = renderInitPage();
                    break;
                default:
                    break;
            }
            return ret;
        });
    }
};

module.exports = {render};