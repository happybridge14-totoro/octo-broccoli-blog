import {dataObject} from "./dataInterface.js";

let evtSource:EventSource | null;
const start = (cb:(data:dataObject)=>void)=> {
    if (!evtSource) {
        evtSource= new EventSource("/sse");
        evtSource.onmessage = function(event:MessageEvent) {
            try {
                const data:dataObject = JSON.parse(event.data);
                console.log("sseeeeeee!!!!");
                cb(data);
            } catch(e) {
        
            }
        }
        console.log("sse open");
    }
}
const stop = () => {
    if (evtSource) {
        console.log("sse close");
        evtSource.close();
    }
};

export {start, stop};