"use strict";
((window) => {
    const DEFAULT_KEY = "count";
    class MiniJquery {
        constructor(parameters) {
            if (typeof parameters === "string") {
                let targetElement = window.document.querySelector(parameters);
                if (!targetElement) {
                    this.element = window.document.createElement(parameters);
                }
                else {
                    this.element = targetElement;
                }
            }
            else {
                this.element = parameters;
            }
        }
        onClick(callback) {
            if (this.element) {
                this.element.addEventListener("click", callback);
            }
        }
        append(child) {
            this.element.appendChild(child.htmlElement);
        }
        removeSelf() {
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }
        find(query) {
            const targetElement = this.element.querySelector(query);
            if (targetElement) {
                return new MiniJquery(targetElement);
            }
            else {
                return null;
            }
        }
        getDataByKey(key = DEFAULT_KEY) {
            return this.element.dataset[key] || "";
        }
        updateData(newData, key = DEFAULT_KEY, display = true) {
            this.element.dataset[key] = newData;
            if (display) {
                this.element.textContent = newData;
            }
        }
        toString() {
            return this.element.outerHTML;
        }
        set disable(value) {
            const disabledAttr = this.element.disabled;
            if (disabledAttr || disabledAttr === false) {
                this.element.disabled = value;
            }
        }
        get disable() {
            return !!this.element.disabled;
        }
        get htmlElement() {
            return this.element;
        }
        get parent() {
            if (this.element.parentNode) {
                return new MiniJquery(this.element.parentNode);
            }
            else {
                return null;
            }
        }
        get value() {
            return this.element.value || "";
        }
    }
    Object.defineProperty(window, "$", {
        value: (query) => { return new MiniJquery(query); },
        writable: false,
        enumerable: false,
        configurable: false
    });
})(window);
