import $ from "../utils/mini-jquery.js";
const template = $("#login");
const loginPage = template.templateClone || $();
if (!loginPage.element) {
    throw new Error("#signin is not a template node");
}
export { loginPage };
