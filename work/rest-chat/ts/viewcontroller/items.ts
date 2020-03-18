import { STATUS_CODES, ERROR_CODES , ERROR_OBJECT} from "../utils/status-error-codes.js";
import $, {MiniJquery} from "../utils/mini-jquery.js";
import {displayError, hideError} from "./error.js";
import {signOut} from "../model/login.js";
import {addItem, deleteItem, modifyItem} from "../model/items.js";

const containerTemplate:MiniJquery = $("#items");
const itemTemplate:MiniJquery = $("#item");
const ITEM_NAME_ERROR_MESSAGE:string = "Invalid item name!";
const ITEM_QUANTITY_ERROR_MESSAGE:string = "Invalid item quantity!";
const ITEM_DUPLICATED_ERROR_MESSAGE:string = "Item name already exists!";
const ITEM_ID_ERROR_MESSAGE:string = "Item has been removed!";
const UNKNOWN_ERROR_MESSAGE:string = "Unknow error!";
const OPERATION_KEY = "operation";
const OPERATION_UPDATE = "update";
const OPERATION_DELETE = "delete";
const showError = (errorCode: ERROR_CODES) => {
    switch (errorCode) {
        case ERROR_CODES.ITEM_NAME_ERROR:
            displayError(ITEM_NAME_ERROR_MESSAGE);
            break;
        case ERROR_CODES.ITEM_DULPLICATED:
            displayError(ITEM_DUPLICATED_ERROR_MESSAGE);
            break;
        case ERROR_CODES.ITEM_QUANTITY_ERROR:
            displayError(ITEM_QUANTITY_ERROR_MESSAGE);
            break;
        case ERROR_CODES.ITEM_ID_ERROR:
            displayError(ITEM_ID_ERROR_MESSAGE);
            break;
        default:
            displayError(UNKNOWN_ERROR_MESSAGE);
            break;
    }
};
const displayItems = (parentElement:MiniJquery, items:object) => {
    const containerContent:MiniJquery = containerTemplate.templateClone||$();
    const signout:MiniJquery = containerContent.find(".signout") || $();
    const itemsContainer:MiniJquery = containerContent.find(".items-detail") || $();
    const actionContioner:MiniJquery = containerContent.find(".items-action") || $();
    const add:MiniJquery = actionContioner.find(".add") || $();
    const name:MiniJquery = actionContioner.find(".name") || $();
    const quantity:MiniJquery = actionContioner.find(".quantity") || $();
    const checkAddButton = () => {
        add.disable = !/^[0-9]+$/.test(quantity.value);
    };

    const displayItem = (itemId:string, itemName:string, itemQuantity:string) => {
        const itemContent:MiniJquery = itemTemplate.templateClone||$();
        const itemContainer:MiniJquery = itemContent.find(".single-item") || $();
        const name = itemContent.find(".item-name") || $();
        const quantity = itemContent.find(".quantity") || $();
        const updateBtn:MiniJquery = itemContent.find(".update") || $();
        const deleteBtn:MiniJquery = itemContent.find(".delete") || $();
        updateBtn.updateData(OPERATION_UPDATE, OPERATION_KEY);
        deleteBtn.updateData(OPERATION_DELETE, OPERATION_KEY);
        name.updateContent(itemName);
        quantity.value = Number.parseInt(itemQuantity).toString();
        itemContainer.updateData(itemId);
        itemsContainer.append(itemContent)
                    .scrollToButtom();
    };
    name.onInput(() => {
        checkAddButton();
    });
    quantity.onInput(() => {
        checkAddButton();
    });
    add.onClick(async (event:Event) => {
        event.preventDefault();
        const itemName = name.value;
        const itemQuantity = quantity.value;
        const response = await addItem(itemName, itemQuantity);
        if (response.ok) {
            hideError();
            const {itemId} = await response.json();
            displayItem(itemId, itemName, itemQuantity);
            name.value = "";
            quantity.value = "";
            add.disable = true;
        } else {
            if (response.status === STATUS_CODES.UNAUTHORIZED) {
                resolver();
            } else {
                const errorInfo:ERROR_OBJECT = await response.json();
                showError(errorInfo.errorCode);
            }
        }
    });
    let resolver:any; 
    let rejecter:any; 
    parentElement.append(containerContent);
    for (let item of Object.values(items)) {
        const {id, name, quantity} = item;
        displayItem(id, name, quantity);
    }
    itemsContainer.onClick(async (event:Event) => {
        event.preventDefault();
        const target:MiniJquery = $(event.target);
        const operation = target.getDataByKey(OPERATION_KEY);
        if (operation) {
            const parent:MiniJquery = target.parent || $();
            const itemId:string = parent.getDataByKey();
            let response:Response;
            if (operation === OPERATION_DELETE) {
                response = await deleteItem(itemId);
            } else if (operation === OPERATION_UPDATE) {
                const quantity:MiniJquery = parent.find(".quantity") || $();
                quantity.value = Number.parseInt(quantity.value).toString();
                response = await modifyItem(itemId, quantity.value);
            } else {
                return;
            }
            if (response.ok) {
                hideError();
                if (operation === OPERATION_DELETE) {
                    parent.removeSelf();
                }
            } else {
                if (response.status === STATUS_CODES.UNAUTHORIZED) {
                    resolver();
                } else {
                    const errorInfo:ERROR_OBJECT = await response.json();
                    if (errorInfo.errorCode === ERROR_CODES.ITEM_ID_ERROR) {
                        parent.removeSelf();
                    }
                    showError(errorInfo.errorCode);
                }
            }
        }
    });
    itemsContainer.onInput((event:Event) => {
        const input:MiniJquery = $(event.target);
        const parent:MiniJquery = input.parent || $();
        const updateBtn:MiniJquery = parent.find(".update") || $();
        updateBtn.disable = !/^[0-9]+$/.test(input.value);
    });
    add.disable = true;
    signout.onClick((event:Event) => {
        event.preventDefault();
        signOut().then(() => {
            resolver();
        });
    });
    return new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
    });
};

export default displayItems;