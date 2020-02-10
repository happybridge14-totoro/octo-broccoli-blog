const renderGameHistory = require("./game-history");
const {renderAction, renderMessage} = require("./game-ui");
const renderUser = require("./game-user");
const templateHtml = `
    <section class="game-history">
        <h3 class="title">Guess History</h3>
        <div class="body">
            {history}
        </div>
    </section>
    <section class="game-content">
        <h3 class="title">Current Game</h3>
        <div class="body">
            <div class="result">
                {message}
            </div>
            <div class="action">
                {action}
            </div>
            <section class="personal">
                {user}
            </section>
        </div>
    </section>
`;
const render = (steps, isFinished, user, words) => {
    return templateHtml.replace(/{[^}]+}/g, (match) => {
        let ret = match;
        switch (match) {
            case "{history}":
                ret = renderGameHistory(steps, isFinished);
                break;
            case "{message}":
                ret = renderMessage(steps, words);
                break;
            case "{action}":
                ret = renderAction(isFinished);
                break;
            case "{user}":
                ret = renderUser(user);
                break;
            default:
                break;
        }
        return ret;
    });
};

module.exports = render;