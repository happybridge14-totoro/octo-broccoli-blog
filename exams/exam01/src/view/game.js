const renderGameHistory = require("./game-history");
const {renderAction, renderMessage} = require("./game-ui");
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
                <h5>Login to change the theme!</h5>
                <form action="/changeTheme" method="POST">
                    <label for="changetheme" class="changeThemeText">Current theme: light</label>
                    <button type="submit" id="changetheme" name="changetheme">Change theme</button>
                </form>
            </div>
        </div>
    </section>
`;
const render = (steps, isFinished) => {
    return templateHtml.replace(/{[^}]+}/g, (match) => {
        let ret = match;
        switch (match) {
            case "{history}":
                ret = renderGameHistory(steps, isFinished);
                break;
            case "{message}":
                ret = renderMessage(steps);
                break;
            case "{action}":
                ret = renderAction(isFinished);
                break;
            default:
                break;
        }
        return ret;
    });
};

module.exports = render;