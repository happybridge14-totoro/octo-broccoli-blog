    const DEFAULT_KEY:string = "count";
    class MiniJquery {
        element: HTMLElement;
        constructor(parameters: string | HTMLElement) {
            if (typeof parameters === "string") {
                let targetElement:HTMLElement | null = window.document.querySelector(parameters);
                if (!targetElement) {
                    this.element= window.document.createElement(parameters);
                } else {
                    this.element = targetElement;
                }
            } else {
                this.element = parameters;
            }
        }
        onClick(callback: (e:Event)=>void):void {
            if (this.element) {
                this.element.addEventListener("click", callback);
            }
        }
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
        updateData(newData:string, key:string = DEFAULT_KEY, display:boolean=true):void {
           this.element.dataset[key] = newData; 
           if (display) {
                this.element.textContent = newData;
           }
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
    }
    // Object.defineProperty(window, "$", {
    //     value: $,
    //     writable: false,
    //     enumerable: false,
    //     configurable: false
    // });

let $ = (query:string | HTMLElement):MiniJquery=> {return new MiniJquery(query)};
export default $;