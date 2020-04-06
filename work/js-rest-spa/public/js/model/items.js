import $ from "../utils/mini-jquery.js";
const URL = "/items";
const getURL = (itemId = "") => {
    let url = URL;
    if (itemId !== "") {
        url += "/" + itemId;
    }
    return url;
};
const deleteItem = (itemId) => {
    return $.delete(getURL(itemId));
};
const addItem = (itemName, quantity) => {
    const itemQuantity = Number.parseInt(quantity);
    return $.post(getURL(), { itemName, itemQuantity });
};
const modifyItem = (itemId, itemQuantity) => {
    return $.put(getURL(itemId), { itemQuantity });
};
const getItems = () => {
    return $.get(getURL());
};
export { deleteItem, addItem, modifyItem, getItems };
