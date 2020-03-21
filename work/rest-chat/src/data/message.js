const messages = [];

const addNewMessage = (userName, message) => {
    const newMessage = {
        messageId: messages.length,
        message, 
        userName 
    };
    messages.push(newMessage);
    return newMessage;
};
const getMessages = () => {
    return messages;
};
const getPartialMessages = (lastId) => {
    return messages.slice(lastId + 1);
};
module.exports = {addNewMessage, getMessages, getPartialMessages};