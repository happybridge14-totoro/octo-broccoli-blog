type EVENTS_TYPES = "refresh" | "displayError";
const EVENTS = {
    REFRESH: "refresh" as EVENTS_TYPES,
    DISPLAY_ERROR: "displayError" as EVENTS_TYPES,
};
const eventMap:Map<EVENTS_TYPES, Set<(param:any)=>void>> = new Map();
Object.values(EVENTS).forEach((event) => {
    eventMap.set(event, new Set());
});
const dispatch = (eventName:EVENTS_TYPES, params:any) => {
    const cbSet = eventMap.get(eventName);
    if (cbSet) {
        for (let cb of cbSet) {
            cb(params);
        }
    }
};
const addEventListener = (eventName:EVENTS_TYPES, fn:()=>void) => {
    const cbSet = eventMap.get(eventName);
    if (cbSet && !cbSet.has(fn)) {
        cbSet.add(fn);
    }
};
const removeEventListener = (eventName:EVENTS_TYPES, fn:()=>void) => {
    const cbSet = eventMap.get(eventName);
    if (cbSet && cbSet.has(fn)) {
        cbSet.delete(fn);
    }
};

export {EVENTS, addEventListener, removeEventListener, dispatch};