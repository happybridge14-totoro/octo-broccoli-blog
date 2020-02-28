import $ from "./mini-jquery.js";
;
;
(($) => {
    const data = {};
    const getId = () => {
        const now = Date.now();
        return now.toString();
    };
    const itemTemplete = $("#list-template");
    const userInputTextArea = $(".user-input-text-area");
    const userInput = $(".user-input-text");
    const addButton = $(".user-input-action");
    const displayArea = $(".display-area");
    const listBlock = $(".list-block");
    let needCheck = false;
    userInput.clearValue();
    addButton.disable = true;
    const addItem = () => {
    };
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
    addButton.onClick((e) => {
        needCheck = true;
        const inputValue = userInput.value;
        const newNode = itemTemplete.templateClone;
        const newId = getId();
        if (newNode) {
            listBlock.append(newNode);
            data[getId()] = {
                count: 0,
                content: newNode
            };
        }
        console.log(newNode);
        if (inputValue === "") {
            userInputTextArea.error = true;
        }
        else {
            userInput.clearValue();
        }
    });
})($);
