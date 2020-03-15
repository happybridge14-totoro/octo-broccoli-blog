const DEFAULT_KEY = "id";
const CLASS_NAME_ERROR = "error";
export class MiniJquery {
    constructor(parameters) {
        if (typeof parameters === "string") {
            let targetElement = null;
            try {
                targetElement = window.document.querySelector(parameters);
            }
            catch (e) {
            }
            if (!targetElement) {
                targetElement = window.document.createElement("div");
                targetElement.outerHTML = parameters;
            }
            this.element = targetElement;
        }
        else {
            this.element = parameters;
        }
    }
    onClick(callback) {
        this.element.addEventListener("click", callback);
        return this;
    }
    onInput(callback) {
        this.element.addEventListener("input", callback);
        return this;
    }
    append(child) {
        this.element.appendChild(child.htmlElement);
        return this;
    }
    removeSelf() {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        return this;
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
    updateClass(newToken, oldToken) {
        if (oldToken === "") {
            this.element.classList.add(newToken);
        }
        else {
            this.element.classList.replace(oldToken, newToken);
        }
        return this;
    }
    updateData(data, key = DEFAULT_KEY) {
        this.element.dataset[key] = data;
        return this;
    }
    updateContent(content) {
        this.element.textContent = content;
        this.element.setAttribute("title", content);
        return this;
    }
    scrollToButtom() {
        this.element.scrollTop = this.element.scrollHeight;
        return this;
    }
    clearValue() {
        this.element.value = "";
        return this;
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
    set error(value) {
        if (value) {
            this.element.classList.add(CLASS_NAME_ERROR);
        }
        else {
            this.element.classList.remove(CLASS_NAME_ERROR);
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
    get templateClone() {
        const content = this.element.content;
        if (content) {
            const clone = content.cloneNode(true);
            return new MiniJquery(clone);
        }
        return null;
    }
}
const $ = (query) => { return new MiniJquery(query); };
var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["DELETE"] = "DELETE";
    METHOD["PUT"] = "PUT";
})(METHOD || (METHOD = {}));
;
;
["GET", "POST", "DELETE", "PUT"].forEach((method) => {
    const param = {
        method: method,
    };
    $[method.toLowerCase()] = (url, content) => {
        if (content) {
            param.headers = { 'Content-Type': 'application/json' };
            param.body = JSON.stringify(content);
        }
        return fetch(url, content);
    };
});
export default $;
