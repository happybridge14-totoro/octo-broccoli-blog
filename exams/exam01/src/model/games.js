const games = {};
let gameId = 0;

const getNextGameId = () => {
    return ++gameId;
};

module.exports = {games, getNextGameId};