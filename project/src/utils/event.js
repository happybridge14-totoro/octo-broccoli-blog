const EVENTS = {
    REFRESH: "refresh",
    CHECK_USER: "checkUser",
    DISPLAY_ERROR: "displayError",
    HIDE_ERROR: "hideError",
    SET_THEME: "setTheme"
};
const events = {};
Object.values(EVENTS).forEach((event) => {
    events[event] = [];
});
const dispatch = (eventName, params) => {
    const callbacks = events[eventName];
    if (callbacks) {
        for (let callback of callbacks) {
            callback(params);
        }
    }
};
const addEventListener = (eventName, callback) => {
    const callbacks = events[eventName];
    if (callbacks && callbacks.indexOf(callback) < 0) {
        callbacks.push(callback);
    }
};
const removeEventListener = (eventName, callback) => {
    const callbacks = events[eventName];
    if (callbacks) {
        const callbackIndex = callbacks.indexOf(callback);
        if (callbackIndex > -1) {
            callbacks.splice(callbackIndex, 1);
        }
    }
};

export { EVENTS, addEventListener, removeEventListener, dispatch };