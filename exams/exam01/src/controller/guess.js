const {session, game} = require("../model/data");
const compare = (word, guess) => { 
    let ret = 0;
    const count = {};
    for (let char of word) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    for (let char of guess) {
        if (count[char]) {
            count[char]--;
            ret++;
        }
    }
    return ret;
};
const guess = (sessionId, word) => {
    const {gameId} = session.getSession(sessionId);
    const {wordId, steps} = game.getGame(gameId);
    const targetWord = game.getWordById(wordId).toLowerCase();
    const wordLowerCase = word.toLowerCase();
    const lastCount = steps.length === 0 ? 0 : steps[steps.length - 1].guessCount;
    if (wordLowerCase === targetWord) {
        const currentCount = lastCount + 1;
        game.updateSteps(gameId, word, `CORRECT!  You won in ${currentCount} turns!`, targetWord.length, currentCount, true);
    } else if (wordLowerCase.length !== targetWord.length) {
        game.updateSteps(gameId, word, `Invalid word. Please guess a ${targetWord.length} length word.`, 0, lastCount, false);
    } else {
        const currentCount = lastCount + 1;
        const count = compare(wordLowerCase, targetWord);
        game.updateSteps(gameId, word, `You matched ${count} letters out of ${targetWord.length}.`, count, currentCount, false);
    }
};

module.exports = guess;