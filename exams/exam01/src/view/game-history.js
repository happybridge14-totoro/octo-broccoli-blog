const render = (steps) => {
    let stepString = "";
    for (let i = steps.length - 1; i >= 0; --i) {
        const {guessCount, guessWord, message} = steps[i];
        stepString +=  
            `<div class="one-guess">
                ${guessCount ? `<p>Round ${guessCount}:</p>` : ""}
                <p>Your guess: ${guessWord}</p>
                <p>${message}</p>
            </div>`;
    }
    return stepString;
};

module.exports = render;