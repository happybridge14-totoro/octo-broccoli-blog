// Simple not 100% safe uuid generator
const uuidGenerator = () => {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
};
module.exports = uuidGenerator;