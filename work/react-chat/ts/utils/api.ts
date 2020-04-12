interface commonObject {
    [key:string]: any
};
const api:commonObject = {};
const METHOD = {
    GET: "get",
    PUT: "put",
    DELETE: "delete",
    POST: "post",
};
Object.values(METHOD).forEach((method:string) => {
    const param:commonObject = {
        method
    };
    api[method.toLowerCase()] = (url:string, content?: object):Promise<Response> => {
        if (content) {
            if (method !== METHOD.GET) {
                param.headers = { 'Content-Type': 'application/json' };
                param.body = JSON.stringify(content);
            } else {
                const query = Object.entries(content).map(([key, value]) => {
                    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
                }).join("&");
                url = url + (query === "" ? "" : "?" + query);
            }
        }
        return fetch(url, param);
    };
});
export default api; 