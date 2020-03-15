import $ from "../utils/mini-jquery.js";
const URL = "/items";

const getURL = (itemId:string="") => {
    let url = URL;
    if (itemId !== "") {
        url += "/" + itemId;
    }
    return url;
};

const deleteItem = (itemId: string) => {
    return $.delete(getURL(itemId));
};

const addItem = (itemName:string, itemQuality:string) => {
    return $.post(getURL(), {itemName, itemQuality});
};
const modifyItem = (itemId:string, itemQuality: string) => {
    return $.put(getURL(itemId), {itemQuality});
};
const getItems = () => {
    return $.get(getURL());
};

export default {deleteItem, addItem, modifyItem, getItems};