import $ from "../utils/mini-jquery.js";
const URL = "/items";

const getURL = (itemId:string=""):string => {
    let url = URL;
    if (itemId !== "") {
        url += "/" + itemId;
    }
    return url;
};

const deleteItem = (itemId: string):Promise<Response> => {
    return $.delete(getURL(itemId));
};
const addItem = (itemName:string, quantity:string):Promise<Response> => {
    const itemQuantity:number = Number.parseInt(quantity);
    return $.post(getURL(), {itemName, itemQuantity});
};
const modifyItem = (itemId:string, itemQuantity: string):Promise<Response> => {
    return $.put(getURL(itemId), {itemQuantity});
};
const getItems = ():Promise<Response> => {
    return $.get(getURL());
};

export {deleteItem, addItem, modifyItem, getItems};