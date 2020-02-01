const { getSenderList } = require("../model/data");

let senderListHtml = "<li></li>";
const update = () => {
    senderListHtml = "";
    const senderList = getSenderList();
    for (let sender of senderList.values()) {
        senderListHtml += `<li>${sender.name}</li>\n`;
    }
};
const render = () => {
    return senderListHtml;
};
module.exports = {update, render};