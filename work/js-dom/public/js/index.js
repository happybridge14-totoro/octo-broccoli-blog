import $ from "./mini-jquery.js";
;
(($) => {
    let Operation;
    (function (Operation) {
        Operation["PLUS"] = "plus";
        Operation["MINUS"] = "minus";
        Operation["DELETE"] = "delete";
    })(Operation || (Operation = {}));
    const KEY_OPERATION = "operation";
    const data = {};
    const getId = () => {
        return Date.now().toString(36);
    };
    const itemTemplete = $("#list-template");
    const userInputTextArea = $(".user-input-text-area");
    const userInput = $(".user-input-text");
    const addButton = $(".user-input-action");
    const listBlock = $(".list-block");
    let needCheck = false;
    userInput.clearValue();
    addButton.disable = true;
    const setMinusButtonStatus = (baseNode, disable) => {
        if (baseNode) {
            const minusButton = baseNode.find(".list-item-minus");
            if (minusButton) {
                minusButton.disable = disable;
            }
        }
        else {
            throw new Error("Base node not found!");
        }
    };
    listBlock.onClick((e) => {
        var _a, _b, _c;
        if (e.target) {
            const target = $(e.target);
            const operation = target.getDataByKey(KEY_OPERATION);
            const containerNode = (_b = (_a = target) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.parent;
            if (containerNode) {
                const id = containerNode.getDataByKey();
                const countNode = containerNode.find(".list-item-count");
                switch (operation) {
                    case Operation.PLUS:
                        if (countNode) {
                            const count = ++(data[id].count);
                            countNode.updateContent(count.toString());
                            setMinusButtonStatus(containerNode, count === 0);
                        }
                        else {
                            throw new Error(".list-item-count not found! id: " + id);
                        }
                        break;
                    case Operation.MINUS:
                        if (countNode) {
                            if (((_c = data[id]) === null || _c === void 0 ? void 0 : _c.count) > 0) {
                                const count = --(data[id].count);
                                countNode.updateContent(count.toString());
                                setMinusButtonStatus(containerNode, count === 0);
                            }
                            else {
                                throw new Error("Count error! Should bigger than zero!");
                            }
                        }
                        else {
                            throw new Error(".list-item-count not found! id: " + id);
                        }
                        break;
                    case Operation.DELETE:
                        delete data[id];
                        containerNode.removeSelf();
                        break;
                    default:
                        break;
                }
            }
            else {
                throw new Error("Deleting wrong element!");
            }
        }
    });
    userInput.onInput((e) => {
        if (e.target) {
            const value = e.target.value;
            if (value) {
                userInputTextArea.error = false;
                addButton.disable = false;
            }
            else {
                if (needCheck) {
                    userInputTextArea.error = true;
                }
                addButton.disable = true;
            }
        }
    });
    const addItem = (node, id, itemName, count = 0) => {
        const rootNode = node.find(".list-item");
        const nameNode = node.find(".list-item-name");
        const countNode = node.find(".list-item-count");
        const plusButton = node.find(".list-item-plus");
        const minusButton = node.find(".list-item-minus");
        const deleteButton = node.find(".list-item-delete");
        if (rootNode && nameNode && countNode && minusButton && plusButton && deleteButton) {
            rootNode.updateData(id);
            nameNode.updateContent(itemName);
            countNode.updateContent(count.toString());
            minusButton.disable = count === 0;
            minusButton.updateData(Operation.MINUS, KEY_OPERATION);
            plusButton.updateData(Operation.PLUS, KEY_OPERATION);
            deleteButton.updateData(Operation.DELETE, KEY_OPERATION);
        }
        else {
            throw new Error("Element missing! Please check the dom elements");
        }
    };
    addButton.onClick((e) => {
        needCheck = true;
        const inputValue = userInput.value;
        const newNode = itemTemplete.templateClone;
        const newId = getId();
        if (newNode) {
            const count = 0;
            data[newId] = {
                name: inputValue,
                count: count
            };
            addItem(newNode, newId, inputValue);
            listBlock.append(newNode);
            listBlock.scrollToButtom();
        }
        if (inputValue === "") {
            userInputTextArea.error = true;
        }
        else {
            userInput.clearValue();
            addButton.disable = true;
        }
    });
})($);
