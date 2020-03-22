let ws;
const start = (cb) => {
    if (!ws) {
        ws = new WebSocket('ws://localhost:3000');
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Socket!!!!!!!");
            cb(data);
        };
        ws.onopen = () => {
            console.log("client ws open");
        };
        window.onbeforeunload = () => {
            if (ws) {
                ws.onclose = () => { };
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
export { start, stop };
