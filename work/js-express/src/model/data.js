const senderList = new Map();
const messageList = {};


//Simply use user name as id
//private
const addUserAndGetId = (newSender) => {
    senderList.set(newSender, {
        id: newSender,
        name: newSender,
    });
    return newSender;
};

//public 
const getSenderList = () => {
    return senderList;
};

const getSenderNamebyId = (id) => {
    return senderList.get(id).name;
};
//Simply use timestamp as id
const addMessage = (sender, message) => {
    const senderID = addUserAndGetId(sender);
    const now = Date.now();
    messageList[now] = {
        id: now,
        content: message,
        senderid: senderID,
        timestamp: now
    };
};

const getMessageList = () => {
    return messageList;
};

module.exports = {
    getSenderList,
    getSenderNamebyId,
    getMessageList,
    addMessage
};