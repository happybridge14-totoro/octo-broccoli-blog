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
    indexHtml = indexHtmlTemplate.replace("{userlist}", senderlistPage.render());
};

//public
const render = () => {
    return indexHtml;
};
const update = (sender, message) => {
    addMessage(sender, message);
    senderlistPage.update();
    updateHTML();
    // messagePage.update();
    
};
updateHTML();
module.exports = { render , update };