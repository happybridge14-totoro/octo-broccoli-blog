import $ from "./mini-jquery.js";
;
(($) => {
    let Operation;
    (function (Operation) {
        Operation["PLUS"] = "plus";
        Operation["MINUS"] = "minus";
        Operation["DELETE"] = "delete";
    })(Operation || (Operation = {}));
    ;
    const renderNextTheme = (() => {
        let themeIndex = -1;
        let currentClassName = "";
        const THEMES = ["dark", "light"];
        const getThemeClassName = (theme) => {
            return `${theme}-theme`;
        };
        const getNextTheme = () => {
            themeIndex = (++themeIndex) % THEMES.length;
            return THEMES[themeIndex];
        };
        const bodyNode = $("body");
        return () => {
            const oldClassName = currentClassName;
            currentClassName = getThemeClassName(getNextTheme());
            bodyNode.updateClass(currentClassName, oldClassName);
        };
    })();
    renderNextTheme();
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
    const changeThemeButton = $(".user-theme-change");
    let needCheck = false;
    userInput.clearValue();
    addButton.disable = true;
    changeThemeButton.onClick((e) => {
        renderNextTheme();
    });
    listBlock.onClick((e) => {
        var _a, _b;
        if (e.target) {
            const target = $(e.target);
            const operation = target.getDataByKey(KEY_OPERATION);
            const containerNode = (_b = (_a = target) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.parent;
            if (containerNode) {
                const id = containerNode.getDataByKey();
                switch (operation) {
                    case "plus":
                    case "minus":
                        const countNode = containerNode.find(".list-item-count");
                        const currentData = data[id];
                        if (countNode && currentData) {
                            const count = operation === "plus" ? ++(currentData.count) : --(currentData.count);
                            if (count >= 0) {
                                countNode.updateContent(count.toString());
                                const minusButton = containerNode.find(".list-item-minus");
                                if (minusButton) {
                                    minusButton.disable = count === 0;
                                }
                            }
                            else {
                                throw new Error("Count error! Should bigger than zero!");
                            }
                        }
                        else {
                            throw new Error(".list-item-count not found! id: " + id);
                        }
                        break;
                    case "delete":
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
            minusButton.updateData("minus", KEY_OPERATION);
            plusButton.updateData("plus", KEY_OPERATION);
            deleteButton.updateData("delete", KEY_OPERATION);
        }
        else {
            throw new Error("Element missing! Please check the dom elements");
        }
    };
    addButton.onClick((e) => {
        needCheck = true;
        const inputValue = userInput.value;
        if (inputValue === "") {
            userInputTextArea.error = true;
        }
        else {
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
                userInput.clearValue();
                addButton.disable = true;
                needCheck = false;
            }
            else {
                throw new Error("Templete element missing!");
            }
        }
    });
})($);
