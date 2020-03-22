let evtSource;
const start = (cb) => {
    if (!evtSource) {
        evtSource = new EventSource("/sse");
        evtSource.onmessage = function (event) {
            try {
                const data = JSON.parse(event.data);
                cb(data);
            }
            catch (e) {
            }
        };
    }
};
const stop = () => {
    if (evtSource) {
        evtSource.close();
        evtSource = null;
    }
};
export { start, stop };
