const fs = require("fs");
const path = require("path");

const encodingOption = 'utf-8';
const indexTemplatePath = "../template/index.html";

let indexHtml = fs.readFileSync(path.resolve(__dirname, indexTemplatePath), encodingOption);
const render = () => {
    return indexHtml;
};
const update = () => {

};
module.exports = { render , update };