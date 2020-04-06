const DEFAULT_KEY = "id";
const CLASS_NAME_ERROR = "error";
const ATTR_DATE_TIME = "datetime";
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
            }
            this.element = targetElement;
        }
        else {
            this.element = parameters;
        }
    }
    onSubmit(callback) {
        this.element.addEventListener("submit", callback);
        return this;
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
    removeChildren() {
        this.element.innerHTML = "";
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
    scrollToTop() {
        this.element.scrollTop = 0;
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
    triggleClass(className) {
        this.element.classList.toggle(className);
        return this;
    }
    addClass(className) {
        this.element.classList.add(className);
        return this;
    }
    removeClass(className) {
        this.element.classList.remove(className);
        return this;
    }
    set time(value) {
        const time = new Date(value).toLocaleString();
        this.element.setAttribute(ATTR_DATE_TIME, time);
        this.element.innerText = time;
    }
    set text(value) {
        this.element.innerText = value;
    }
    set disable(value) {
        const disabledAttr = this.element.disabled;
        if (disabledAttr || disabledAttr === false) {
            this.element.disabled = value;
        }
    }
    set hidden(value) {
        this.element.hidden = value;
    }
    set error(value) {
        if (value) {
            this.element.classList.add(CLASS_NAME_ERROR);
        }
        else {
            this.element.classList.remove(CLASS_NAME_ERROR);
        }
    }
    set value(value) {
        this.element.value = value;
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
[METHOD.GET, METHOD.POST, METHOD.DELETE, METHOD.PUT].forEach((method) => {
    const param = {
        method: method,
    };
    $[method.toLowerCase()] = (url, content) => {
        if (content) {
            if (method !== METHOD.GET) {
                param.headers = { 'Content-Type': 'application/json' };
                param.body = JSON.stringify(content);
            }
            else {
                const query = Object.entries(content).map(([key, value]) => {
                    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
                }).join("&");
                url = url + (query === "" ? "" : "?" + query);
            }
        }
        return fetch(url, param);
    };
});
export default $;