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

const getMessageList = () => {
    return messageList;
};

const getSenderList = () => {
    return senderList;
};

const getSenderNamebyId = (id) => {
    return senderList.get(id).name;
};
//public 

const isNewSender = (sender) => {
    return !senderList.has(sender);
};

//Simply use timestamp as id
const addMessage = (sender, message, timestamp) => {
    const senderID = addUserAndGetId(sender);
    messageList[timestamp] = {
        id: timestamp,
        content: message,
        senderid: senderID,
        timestamp: timestamp
    };
};

module.exports = {
    isNewSender,
    addMessage
};