import $ from "../utils/mini-jquery.js";
const template = $("#items");
let content = template.templateClone || $();
let resolver;
let rejecter;
const displayItems = (parentElement, items) => {
    parentElement.append(content);
    return new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
    });
};
export default displayItems;
