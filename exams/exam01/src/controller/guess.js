const {session, game} = require("../model/dataProxy");
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
    const {wordId, guessCount} = game.getGame(gameId);
    const targetWord = game.getWordById(wordId).toLowerCase();
    const wordLowerCase = word.toLowerCase();
    const currentCount = guessCount + 1;
    if (wordLowerCase === targetWord) {
        game.updateSteps(gameId, word, `CORRECT!  You won in ${currentCount} turns!`, targetWord.length, currentCount, true);
    } else if (!game.hasWord(wordLowerCase)) {
        game.updateSteps(gameId, word, `Invalid word. Please guess a ${targetWord.length} length word.`, 0, 0, false);
    } else {
        const count = compare(wordLowerCase, targetWord);
        game.updateSteps(gameId, word, `You matched ${count} letters out of ${targetWord.length}.`, count, currentCount, false);
    }
};

module.exports = guess;