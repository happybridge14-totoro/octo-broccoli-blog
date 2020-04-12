import {dataObject} from "./dataInterface";

let evtSource:EventSource | null;
const start = (cb:(data:dataObject)=>void)=> {
    if (!evtSource) {
        evtSource= new EventSource("/sse");
        evtSource.onmessage = function(event:MessageEvent) {
            try {
                const data:dataObject = JSON.parse(event.data);
                cb(data);
            } catch(e) {
        
            }
        }
    }
}
const stop = () => {
    if (evtSource) {
        evtSource.close();
        evtSource = null;
    }
};

export {start, stop};