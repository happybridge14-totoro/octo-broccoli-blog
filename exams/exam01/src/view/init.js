const render = () => {
    return `
    <form action="/beginNewGame" method="post" class="game-init">
        <label>Start a new game as an anonymous user</label>
        <button type="submit">Start</button>
    </form>
    <form action="/signin" method="post" class="game-init">
        <div>Sign in to resume a previous game,</div>
        <div> or start a new game if you are a new user</div>
        <input id="username" name="username" type="text" required>
        <button type="submit">Sign in</button>
    </form>`;
};

module.exports = render;