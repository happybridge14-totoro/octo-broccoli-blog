const fs = require("fs");
const path = require("path");

const senderlistPage = require("./view/senderlist");
const messagePage = require("./view/message");
const {addMessage} = require("./model/data");

const encodingOption = 'utf-8';
const indexTemplatePath = "./index.html";

const indexHtmlTemplate = fs.readFileSync(path.resolve(__dirname, indexTemplatePath), encodingOption);
let indexHtml = "";

//private
const updateHTML = () => {
    indexHtml = indexHtmlTemplate.replace(/{[^}]+}/g, (matchStr) => {
        if (matchStr === "{messagelist}") return messagePage.render();
        if (matchStr === "{userlist}") return senderlistPage.render();
    });
};

//public
const render = () => {
    return indexHtml;
};
const update = (sender, message, timestamp) => {
    senderlistPage.update(sender);
    messagePage.update(sender, message, timestamp);
    addMessage(sender, message, timestamp);
    updateHTML();
};
updateHTML();
module.exports = { render , update };