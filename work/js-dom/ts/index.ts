import $, {MiniJqueryObject} from "./mini-jquery.js";
interface IDataObject {
    [key: string]: {
        name: string,
        count: number
    };
};
(($)=>{
    enum Operation {
        PLUS = "plus",
        MINUS = "minus",
        DELETE = "delete"
    }
    const KEY_OPERATION = "operation";
    const data:IDataObject = {};
    const getId = ():string => {
        return Date.now().toString(36);
    };
    const itemTemplete:MiniJqueryObject = $("#list-template");
    const userInputTextArea:MiniJqueryObject = $(".user-input-text-area");
    const userInput:MiniJqueryObject = $(".user-input-text");
    const addButton:MiniJqueryObject = $(".user-input-action");
    const listBlock:MiniJqueryObject = $(".list-block");
    let needCheck:boolean = false;
    userInput.clearValue();
    addButton.disable = true;
    const setMinusButtonStatus = (baseNode:MiniJqueryObject|null, disable:boolean):void => {
        if (baseNode) {
            const minusButton = baseNode.find(".list-item-minus");
            if (minusButton) {
                minusButton.disable = disable;
            }
        } else {
            throw new Error("Base node not found!");
        }
    };
    listBlock.onClick((e:Event) => {
        if (e.target) {
            const target:MiniJqueryObject = $(e.target as HTMLElement);
            const operation = target.getDataByKey(KEY_OPERATION);
            const containerNode:MiniJqueryObject | null | undefined = target?.parent?.parent;
            if (containerNode) {
                const id: string = containerNode.getDataByKey();
                const countNode: MiniJqueryObject | null = containerNode.find(".list-item-count");
                switch (operation) {
                    case Operation.PLUS:
                        if (countNode) {
                            const count:number = ++(data[id].count);
                            countNode.updateContent(count.toString());
                            setMinusButtonStatus(containerNode, count===0);
                        } else {
                            throw new Error(".list-item-count not found! id: " + id);
                        }
                        break;
                    case Operation.MINUS:
                        if (countNode) {
                            if (data[id]?.count > 0) {
                                const count:number = --(data[id].count);
                                countNode.updateContent(count.toString());
                                setMinusButtonStatus(containerNode, count===0);
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
    userInput.onInput((e:Event) => {
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
    const addItem = (node:MiniJqueryObject, id:string, itemName:string, count:number=0) => {
        const rootNode: MiniJqueryObject | null = node.find(".list-item");
        const nameNode:MiniJqueryObject | null = node.find(".list-item-name");
        const countNode:MiniJqueryObject | null= node.find(".list-item-count");
        const plusButton:MiniJqueryObject | null = node.find(".list-item-plus");
        const minusButton:MiniJqueryObject | null = node.find(".list-item-minus");
        const deleteButton:MiniJqueryObject | null = node.find(".list-item-delete");
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
    addButton.onClick((e:Event) => {
        needCheck = true;
        const inputValue:string = userInput.value;
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
        }
        if (inputValue === "") {
            userInputTextArea.error = true;
        } else {
            userInput.clearValue();
            addButton.disable = true;
            needCheck = false;
        }
    });
})($);