import $, { MiniJquery } from "./mini-jquery.js";
interface IDataObject {
    [key: string]: {
        name: string,
        count: number
    };
};
(($)=>{
    const enum Operation {
        PLUS = "plus",
        MINUS = "minus",
        DELETE = "delete"
    };
    const renderNextTheme: () => void =  (() => {
        let themeIndex:number = -1;
        let currentClassName:string = "";
        const THEMES:string[] = ["dark", "light"];
        const getThemeClassName = (theme:string):string => {
            return `${theme}-theme`;
        };
        const getNextTheme = ():string => {
            themeIndex = (++themeIndex) % THEMES.length;
            return THEMES[themeIndex];
        };
        const bodyNode = $("body");
        return ():void => {
            const oldClassName:string = currentClassName;
            currentClassName = getThemeClassName(getNextTheme());
            bodyNode.updateClass(currentClassName, oldClassName);
        };
    })();
    renderNextTheme();
    const KEY_OPERATION = "operation";
    const data:IDataObject = {};
    const getId = ():string => {
        return Date.now().toString(36);
    };
    const itemTemplete: MiniJquery = $("#list-template");
    const userInputTextArea: MiniJquery = $(".user-input-text-area");
    const userInput: MiniJquery = $(".user-input-text");
    const addButton: MiniJquery = $(".user-input-action");
    const listBlock: MiniJquery = $(".list-block");
    const changeThemeButton: MiniJquery = $(".user-theme-change");
    let needCheck:boolean = false;
    userInput.clearValue();
    addButton.disable = true;

    changeThemeButton.onClick((e:Event):void => {
        renderNextTheme();
    });

    listBlock.onClick((e:Event):void=> {
        if (e.target) {
            const target:MiniJquery = $(e.target as HTMLElement);
            const operation = target.getDataByKey(KEY_OPERATION);
            const containerNode:MiniJquery | null | undefined = target?.parent?.parent;
            if (containerNode) {
                const id: string = containerNode.getDataByKey();
                switch (operation) {
                    case Operation.PLUS:
                    case Operation.MINUS:
                        const countNode: MiniJquery | null = containerNode.find(".list-item-count");
                        const currentData = data[id];
                        if (countNode && currentData) {
                            const count:number = operation === Operation.PLUS ? ++(currentData.count) : --(currentData.count);
                            if (count >= 0) {
                                countNode.updateContent(count.toString());
                                const minusButton = containerNode.find(".list-item-minus");
                                if (minusButton) {
                                    minusButton.disable = count === 0;
                                }
                            } else {
                                throw new Error("Count error! Should bigger than zero!");
                            }
                        } else {
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
            } else {
                throw new Error("Deleting wrong element!");
            }
        }
    });

    userInput.onInput((e:Event):void => {
        if (e.target) {
            const value:string = (e.target as HTMLInputElement).value;
            if (value) {
                userInputTextArea.error = false;
                addButton.disable = false;
            } else {
                if (needCheck) {
                    userInputTextArea.error = true;
                }
                addButton.disable = true;
            }
        }
    });

    const addItem = (node:MiniJquery, id:string, itemName:string, count:number=0) => {
        const rootNode: MiniJquery | null = node.find(".list-item");
        const nameNode:MiniJquery | null = node.find(".list-item-name");
        const countNode:MiniJquery | null= node.find(".list-item-count");
        const plusButton:MiniJquery | null = node.find(".list-item-plus");
        const minusButton:MiniJquery | null = node.find(".list-item-minus");
        const deleteButton:MiniJquery | null = node.find(".list-item-delete");
        if (rootNode && nameNode && countNode && minusButton && plusButton && deleteButton) {
            rootNode.updateData(id);
            nameNode.updateContent(itemName);
            countNode.updateContent(count.toString());
            minusButton.disable = count === 0;
            minusButton.updateData(Operation.MINUS, KEY_OPERATION);
            plusButton.updateData(Operation.PLUS, KEY_OPERATION);
            deleteButton.updateData(Operation.DELETE, KEY_OPERATION);
        } else {
            throw new Error("Element missing! Please check the dom elements");
        }
    };
    addButton.onClick((e:Event):void => {
        needCheck = true;
        const inputValue:string = userInput.value;
        if (inputValue === "") {
            userInputTextArea.error = true;
        } else {
            const newNode = itemTemplete.templateClone;
            const newId = getId();
            if (newNode) {
                const count:number = 0;
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
            } else {
                throw new Error("Templete element missing!");
            }
        }
    });
})($);