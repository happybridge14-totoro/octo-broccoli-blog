const renderMessage = (steps, words) => {
    let messageHtml = '<p>Please guess the word from the word list below:</p><p class="word-list">';
    words.forEach(word => {
        messageHtml += `<span class="words">${word}</span>`
    });
    messageHtml += "</p>";
    if (steps.length === 0) {
        messageHtml += "<p>Begin your new guess!</p>";
    } else {
        const {guessCount, guessWord, message} = steps[steps.length - 1];
        messageHtml += (guessCount ? `<p>Round ${guessCount}:</p>` : "") + `
            <p>Your guess: ${guessWord}</p>
            <p>${message}</p>`;
    }

    return messageHtml;
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
                <input type="text" name="word" id="word" autocomplete="off" required>
                <button type="submit" class="guess">Guess</button>
            </form>`;
    }
};
module.exports = {renderAction, renderMessage};