let ws;
let intervalHandler = -1;
const ONE_MINUTE = 60000;
const start = (cb) => {
    if (!ws) {
        ws = new WebSocket('ws://localhost:3000');
        const ping = () => {
            clearInterval(intervalHandler);
            intervalHandler = setInterval(() => {
                var _a;
                const ping = "ping";
                (_a = ws) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify({ ping }));
            }, ONE_MINUTE);
        };
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            cb(data);
            ping();
        };
        ws.onopen = () => {
            ping();
        };
        window.onbeforeunload = () => {
            if (ws) {
                ws.onclose = () => { };
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
export { start, stop };
