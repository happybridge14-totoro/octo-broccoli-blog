const DEFAULT_KEY:string = "id";
const CLASS_NAME_ERROR:string = "error";
class MiniJquery {
    element: HTMLElement;
    constructor(parameters: string | HTMLElement) {
        if (typeof parameters === "string") {
            let targetElement:HTMLElement | null = null;
            try {
                targetElement = window.document.querySelector(parameters);
            } catch(e) {
                
            }
            if (!targetElement) {
                targetElement = window.document.createElement("div");
                targetElement.outerHTML = parameters;
            }
            this.element = targetElement;
        } else {
            this.element = parameters;
        }
    }
    onClick(callback: (e:Event)=>void):void {
        this.element.addEventListener("click", callback);
    }
    onInput(callback: (e:Event)=>void):void {
        this.element.addEventListener("input", callback);
    }
    // onSubmit(callback: (e:Event) => void):void {
    //     this.element.addEventListener("submit", callback);
    // }
    append(child: MiniJquery):void {
        this.element.appendChild(child.htmlElement);
    }
    removeSelf():void {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
    find(query: string):MiniJquery | null {
        const targetElement:HTMLElement | null = this.element.querySelector(query) as HTMLElement;
        if (targetElement) {
            return new MiniJquery(targetElement);
        } else {
            return null;
        }
    }
    getDataByKey(key:string = DEFAULT_KEY):string {
        return this.element.dataset[key] || "";
    }
    updateData(newData:string, content:string, key:string = DEFAULT_KEY):void {
        this.element.dataset[key] = newData; 
        this.element.textContent = content;
    }
    clearValue():void {
        (this.element as HTMLInputElement).value = "";
    }
    toString():string {
        return this.element.outerHTML;
    }
    set disable(value: boolean) {
        const disabledAttr: boolean | null = (this.element as HTMLInputElement).disabled;
        if (disabledAttr || disabledAttr === false) {
            (this.element as HTMLInputElement).disabled = value;
        } 
    }
    set error(value: boolean) {
        if (value) {
            this.element.classList.add(CLASS_NAME_ERROR);
        } else {
            this.element.classList.remove(CLASS_NAME_ERROR);
        }
    }
    get disable():boolean {
        return !!(this.element as HTMLInputElement).disabled;
    }
    get htmlElement():HTMLElement {
        return this.element;
    }
    get parent():MiniJquery | null {
        if (this.element.parentNode) {
            return new MiniJquery((this.element.parentNode as HTMLElement));
        } else {
            return null;
        }
    }
    get value():string {
        return (this.element as HTMLInputElement).value || "";
    }
    get templateClone():MiniJquery | null{
        const content:DocumentFragment = (this.element as HTMLTemplateElement).content;
        if (content) {
            const clone = content.cloneNode(true);
            return new MiniJquery(clone as HTMLElement);
        }
        return null;
    }
}
    // Object.defineProperty(window, "$", {
    //     value: $,
    //     writable: false,
    //     enumerable: false,
    //     configurable: false
    // });

const $ = (query:string | HTMLElement):MiniJquery=> {return new MiniJquery(query)};
export default $;