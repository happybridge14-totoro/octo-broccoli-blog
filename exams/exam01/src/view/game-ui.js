const renderMessage = (steps, isFinished) => {
    if (steps.length === 0) {
        return "<p>Begin your new guess!</p>";
    } else {
        const {guessCount, guessWord, message} = steps[steps.length - 1];
        return `
            <p>Round ${guessCount}:</p>
            <p>Your guess: ${guessWord}</p>
            <p>${message}</p>`;
    }
};
                
const renderAction = (isFinished) => {
    if (isFinished) {
        return `
            <form action="/beginNewGame" method="POST">
                <button type="submit">Start a new game</button>
            </form>`;
    } else {
        return `
            <form action="/guess" method="POST" autocomplete="off">
                <input type="text" name="word" id="word" autocomplete="off">
                <button type="submit">Guess</button>
            </form>`;
    }
};
module.exports = {renderAction, renderMessage};