import $ from "../utils/mini-jquery.js";
import { displayError, hideError } from "./error.js";
import { signOut } from "../model/login.js";
import { addItem, deleteItem, modifyItem } from "../model/items.js";
const containerTemplate = $("#items");
const itemTemplate = $("#item");
const ITEM_NAME_ERROR_MESSAGE = "Invalid item name!";
const ITEM_QUANTITY_ERROR_MESSAGE = "Invalid item quantity!";
const ITEM_DUPLICATED_ERROR_MESSAGE = "Item name already exists!";
const ITEM_ID_ERROR_MESSAGE = "Item has been removed!";
const UNKNOWN_ERROR_MESSAGE = "Unknow error!";
;
const OPERATION_KEY = "operation";
const OPERATION_UPDATE = "update";
const OPERATION_DELETE = "delete";
const showError = (errorCode) => {
    switch (errorCode) {
        case 11:
            displayError(ITEM_NAME_ERROR_MESSAGE);
            break;
        case 15:
            displayError(ITEM_DUPLICATED_ERROR_MESSAGE);
            break;
        case 12:
            displayError(ITEM_QUANTITY_ERROR_MESSAGE);
            break;
        case 10:
            displayError(ITEM_ID_ERROR_MESSAGE);
            break;
        default:
            displayError(UNKNOWN_ERROR_MESSAGE);
            break;
    }
};
const displayItems = (parentElement, items) => {
    const containerContent = containerTemplate.templateClone || $();
    const signout = containerContent.find(".signout") || $();
    const itemsContainer = containerContent.find(".items-detail") || $();
    const actionContioner = containerContent.find(".items-action") || $();
    const add = actionContioner.find(".add") || $();
    const name = actionContioner.find(".name") || $();
    const quantity = actionContioner.find(".quantity") || $();
    const checkAddButton = () => {
        const quantityValue = Number.parseFloat(quantity.value);
        add.disable = name.value.length === 0 || (!Number.isInteger(quantityValue) || quantityValue < 0);
    };
    const displayItem = (itemId, itemName, itemQuantity) => {
        const itemContent = itemTemplate.templateClone || $();
        const itemContainer = itemContent.find(".single-item") || $();
        const name = itemContent.find(".item-name") || $();
        const quantity = itemContent.find(".quantity") || $();
        const updateBtn = itemContent.find(".update") || $();
        const deleteBtn = itemContent.find(".delete") || $();
        updateBtn.updateData(OPERATION_UPDATE, OPERATION_KEY);
        deleteBtn.updateData(OPERATION_DELETE, OPERATION_KEY);
        name.updateContent(itemName);
        quantity.value = itemQuantity;
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
    add.onClick(async (event) => {
        event.preventDefault();
        const itemName = name.value;
        const itemQuantity = quantity.value;
        const response = await addItem(itemName, itemQuantity);
        if (response.ok) {
            hideError();
            const { itemId } = await response.json();
            displayItem(itemId, itemName, itemQuantity);
            name.value = "";
            quantity.value = "";
            add.disable = true;
        }
        else {
            if (response.status === 401) {
                resolver();
            }
            else {
                const errorInfo = await response.json();
                showError(errorInfo.errorCode);
            }
        }
    });
    let resolver;
    let rejecter;
    parentElement.append(containerContent);
    for (let item of Object.values(items)) {
        const { id, name, quantity } = item;
        displayItem(id, name, quantity);
    }
    itemsContainer.onClick(async (event) => {
        event.preventDefault();
        const target = $(event.target);
        const operation = target.getDataByKey(OPERATION_KEY);
        if (operation) {
            const parent = target.parent || $();
            const itemId = parent.getDataByKey();
            let response;
            if (operation === OPERATION_DELETE) {
                response = await deleteItem(itemId);
            }
            else if (operation === OPERATION_UPDATE) {
                const quantity = parent.find(".quantity") || $();
                response = await modifyItem(itemId, quantity.value);
            }
            else {
                return;
            }
            if (response.ok) {
                hideError();
                if (operation === OPERATION_DELETE) {
                    parent.removeSelf();
                }
            }
            else {
                if (response.status === 401) {
                    resolver();
                }
                else {
                    const errorInfo = await response.json();
                    if (errorInfo.errorCode === 10) {
                        parent.removeSelf();
                    }
                    showError(errorInfo.errorCode);
                }
            }
        }
    });
    itemsContainer.onInput((event) => {
        const input = $(event.target);
        const parent = input.parent || $();
        const updateBtn = parent.find(".update") || $();
        const quantityValue = Number.parseFloat(input.value);
        updateBtn.disable = !Number.isInteger(quantityValue) || quantityValue < 0;
    });
    add.disable = true;
    signout.onClick((event) => {
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
