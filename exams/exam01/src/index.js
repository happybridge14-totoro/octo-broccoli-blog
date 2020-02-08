// const indexTemplate = require("./index-template");
// const indexTemplate = require("./index-template");
const fs = require("fs");
const path = require("path");
const encodingOption = 'utf-8';
const indexTemplatePath = "./index.html";
const indexHtmlTemplate = fs.readFileSync(path.resolve(__dirname, indexTemplatePath), encodingOption);

const render = () => {
    return indexHtmlTemplate;
};

const update = () => {

};

module.exports = {render, update};