import {dataObject} from "./dataInterface.js";

let ws:WebSocket|null;

const start = (cb:(data:dataObject)=>void) => {
    if (!ws) {
        ws = new WebSocket('ws://localhost:3000');
        ws.onmessage = (event:MessageEvent) => {
            const data:dataObject = JSON.parse(event.data);
            console.log("Socket!!!!!!!");
            cb(data);
        };
        ws.onopen = () => {
            console.log("client ws open");
            // try {
            //     const hello = "";
            //     if (ws) {
            //         ws.send(JSON.stringify({hello}));
            //     }
            // } catch(e) {
            // }
        }
        window.onbeforeunload = () => {
            if (ws) {
                ws.onclose = () => {}; // disable onclose handler first
                ws.close();
            }
        };
        ws.onclose = () => {
            ws = null;
            console.log("client on close");
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