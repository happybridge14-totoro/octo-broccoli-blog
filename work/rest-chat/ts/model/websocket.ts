import {dataObject} from "./dataInterface";

let ws:WebSocket|null;
let intervalHandler = -1;
const ONE_MINUTE = 60000;

const start = (cb:(data:dataObject)=>void) => {
    if (!ws) {
        ws = new WebSocket('ws://localhost:3000');
        const ping = () => {
            clearInterval(intervalHandler);
            intervalHandler = setInterval(()=>{
                const ping = "ping";
                ws?.send(JSON.stringify({ping}));
            }, ONE_MINUTE)
        };
        ws.onmessage = (event:MessageEvent) => {
            const data:dataObject = JSON.parse(event.data);
            cb(data);
            ping();
        };
        ws.onopen = () => {
            ping();
        }
        window.onbeforeunload = () => {
            if (ws) {
                ws.onclose = () => {}; // disable onclose handler first
                ws.close();
            }
        };
        ws.onclose = () => {
            clearInterval(intervalHandler);
            intervalHandler = -1;
            ws = null;
        };
    }
};
const stop = () => {
    if (ws) {
        ws.close();
    }
    delete window.onbeforeunload;
};

export {start, stop}