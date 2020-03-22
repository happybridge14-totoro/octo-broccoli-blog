let evtSource;
const start = (cb) => {
    if (!evtSource) {
        evtSource = new EventSource("/sse");
        evtSource.onmessage = function (event) {
            try {
                const data = JSON.parse(event.data);
                console.log("sseeeeeee!!!!");
                cb(data);
            }
            catch (e) {
            }
        };
        console.log("sse open");
    }
};
const stop = () => {
    if (evtSource) {
        console.log("sse close");
        evtSource.close();
        evtSource = null;
    }
};
export { start, stop };
