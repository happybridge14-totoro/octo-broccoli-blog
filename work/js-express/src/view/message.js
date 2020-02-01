const { getMessageList } = require("../model/data");

let messagesHtml = "<li></li>";
const update = () => {
    messagesHtml = "";
    const messageList = getMessageList();
    for (let sender of senderList.values) {
        senderListHtml += `<li>${sender.name}</li>/n`;
    }
};
const render = () => {
    return senderListHtml;
};
module.exports = { update, render };