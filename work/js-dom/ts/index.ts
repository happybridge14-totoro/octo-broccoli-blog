import $ from "./mini-jquery.js";
declare class MiniJqueryObject {
    constructor(parameters: string | HTMLElement);
    element: HTMLElement;
    onClick(callback: (e:Event)=>void):void;
    onInput(callback: (e:Event)=>void):void;
    append(child: MiniJqueryObject):void;
    removeSelf():void;
    find(query: string):MiniJqueryObject | null;
    updateData(newData:string, content:string):void;
    getDataByKey(key:string):string;
    clearValue():void;
    toString():string;
    set disable(value: boolean);
    set error(value: boolean);
    get disable():boolean;
    get htmlElement():HTMLElement;
    get parent():MiniJqueryObject | null;
    get value():string;
    get templateClone():MiniJqueryObject | null;
};
interface IDataObject {
    [key: string]: {
        count: number,
        content: MiniJqueryObject
    };
};
(($)=>{
    const data:IDataObject = {};
    const getId = ():string => {
        const now = Date.now();
        return now.toString();
    };
    const itemTemplete:MiniJqueryObject = $("#list-template");
    const userInputTextArea:MiniJqueryObject = $(".user-input-text-area");
    const userInput:MiniJqueryObject = $(".user-input-text");
    const addButton:MiniJqueryObject = $(".user-input-action");
    const displayArea:MiniJqueryObject = $(".display-area");
    const listBlock:MiniJqueryObject = $(".list-block");
    let needCheck:boolean = false;
    userInput.clearValue();
    addButton.disable = true;
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
    const adjustNode = (node:MiniJqueryObject, id:string, text:string=""):void => {
        const textNode = node.find(".list-item-content");
        if (textNode) {
            textNode.updateData(id, text);
        }
    };
    addButton.onClick((e:Event) => {
        needCheck = true;
        const inputValue:string = userInput.value;
        const newNode = itemTemplete.templateClone;
        const newId = getId();
        if (newNode) {
            listBlock.append(newNode);
            const count:number = 0;
            data[getId()] = {
                count: count,
                content: newNode
            };
            adjustNode(newNode, id, inputValue);
        }
        if (inputValue === "") {
            userInputTextArea.error = true;
        } else {
            userInput.clearValue();
        }
    });
})($);