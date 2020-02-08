// Simple not 100% safe uuid generator
const generatSessionId = () => {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toLowerCase();
};
module.exports = generatSessionId;