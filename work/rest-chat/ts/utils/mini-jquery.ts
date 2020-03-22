const DEFAULT_KEY:string = "id";
const CLASS_NAME_ERROR:string = "error";
export class MiniJquery {
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
    onClick(callback: (this:void, e:Event)=>void):MiniJquery {
        this.element.addEventListener("click", callback);
        return this;
    }
    onInput(callback: (this:void, e:Event)=>void):MiniJquery {
        this.element.addEventListener("input", callback);
        return this;
    }
    append(child: MiniJquery):MiniJquery {
        this.element.appendChild(child.htmlElement);
        return this;
    }
    removeSelf():MiniJquery {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        return this;
    }
    removeChildren():MiniJquery {
        this.element.innerHTML = "";
        return this;
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
    updateClass(newToken:string, oldToken:string):MiniJquery {
        if (oldToken === "") {
            this.element.classList.add(newToken);
        } else {
            this.element.classList.replace(oldToken, newToken);
        }
        return this;
    }
    updateData(data:string, key:string = DEFAULT_KEY):MiniJquery {
        this.element.dataset[key] = data; 
        return this;
    }
    updateContent(content: string):MiniJquery {
        this.element.textContent = content;
        this.element.setAttribute("title", content);
        return this;
    }
    scrollToButtom():MiniJquery {
        this.element.scrollTop = this.element.scrollHeight;
        return this;
    }
    clearValue():MiniJquery {
        (this.element as HTMLInputElement).value = "";
        return this;
    }
    toString():string {
        return this.element.outerHTML;
    }
    triggleClass(className:string):MiniJquery {
        this.element.classList.toggle(className);
        return this;
    }
    addClass(className:string):MiniJquery {
        this.element.classList.add(className);
        return this;
    }
    removeClass(className:string):MiniJquery {
        this.element.classList.remove(className);
        return this;
    }
    set text(value: string) {
        this.element.innerText = value;
    }
    set disable(value: boolean) {
        const disabledAttr: boolean | null = (this.element as HTMLInputElement).disabled;
        if (disabledAttr || disabledAttr === false) {
            (this.element as HTMLInputElement).disabled = value;
        } 
    }
    set hidden(value: boolean) {
        this.element.hidden = value;
    }
    set error(value: boolean) {
        if (value) {
            this.element.classList.add(CLASS_NAME_ERROR);
        } else {
            this.element.classList.remove(CLASS_NAME_ERROR);
        }
    }
    set value(value: string) {
        (this.element as HTMLInputElement).value = value;
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

const $:any = (query:string | HTMLElement):MiniJquery=> {return new MiniJquery(query)};
const enum METHOD {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT",
};
interface paramObject {
    [key:string]: any
};
[METHOD.GET, METHOD.POST, METHOD.DELETE, METHOD.PUT].forEach((method) => {
    const param:paramObject = {
        method: method,
    };
    $[method.toLowerCase()] = (url:string, content?: object):Promise<Response> => {
        if (content) {
            param.headers = { 'Content-Type': 'application/json' };
            param.body = JSON.stringify(content);
        }
        return fetch(url, param);
    };
});
export default $; 