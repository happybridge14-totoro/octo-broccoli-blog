import { STATUS_CODES, ERROR_CODES } from "../utils/status-error-codes.js";
import $, {MiniJquery} from "../utils/mini-jquery.js";
import {displayError, hideError} from "./error.js";

const template:MiniJquery = $("#items");
let content:MiniJquery = template.templateClone||$();
let resolver:any; 
let rejecter:any; 

const displayItems = (parentElement:MiniJquery, items:object|null) => {
    parentElement.append(content);
    return new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
    });
};


export default displayItems;