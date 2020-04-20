import {STATUS_CODES} from "./error-status";
const api = {};
const METHOD = {
    GET: "get",
    PUT: "put",
    DELETE: "delete",
    POST: "post",
};
Object.values(METHOD).forEach((method) => {
    const PARAM = {
        method
    };
    api[method.toLowerCase()] = (url, content) => {
        const param = {...PARAM};
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
        return fetch(url, param).catch(()=>{
            return Promise.reject({
                ok: false,
                status: STATUS_CODES.NETWORK_ERROR
            });
        }).then((response)=>{
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        });
    };
});
export default api;