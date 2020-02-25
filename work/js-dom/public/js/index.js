"use strict";
((window) => {
    class MiniJquery {
        constructor(parameters) {
            let targetElement = window.document.querySelector(parameters);
            if (!targetElement) {
                this.element = window.document.createElement(parameters);
            }
            else {
                this.element = targetElement;
            }
        }
        onClick(callback) {
            if (this.element) {
                this.element.addEventListener("click", callback);
            }
        }
        append(node) {
        }
        get value() {
            return this.element.value || "";
        }
        get text() {
            return this.element.textContent || "";
        }
        set text(val) {
            var newContent = document.createTextNode("val");
            this.element.appendChild(newContent);
        }
    }
    Object.defineProperty(window, "$", (query) => {
    });
})(window);
