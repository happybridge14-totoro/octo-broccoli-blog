import $ from "./mini-jquery.js";
declare class MiniJquery {
    constructor(parameters: string | HTMLElement);
    element: HTMLElement;
    onClick(callback: (e:Event)=>void):void;
    append(child: MiniJquery):void;
    removeSelf():void;
    find(query: string):MiniJquery | null;
    getDataByKey(key:string):string;
    toString():string;
    set disable(value: boolean);
    get disable():boolean;
    get htmlElement():HTMLElement;
    get parent():MiniJquery | null;
    get value():string;
}
(($)=>{
    const addBtn:MiniJquery = $(".user-action");
    addBtn.onClick((e:Event) => {
        console.log("hello");
    });
})($);