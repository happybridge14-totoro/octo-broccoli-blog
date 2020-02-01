const { isNewSender } = require("../model/data");

let senderListHtml = "";
const update = (sender) => {
    if (isNewSender(sender)) {
        senderListHtml += `<li>${sender}</li>\n`;
    }
};
const render = () => {
    return senderListHtml;
};
module.exports = {update, render};