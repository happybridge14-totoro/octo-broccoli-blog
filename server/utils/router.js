const auth = require("../middleware/authentication");
const METHODS = ["get", "put", "post", "delete"];
const router = (app, url, target) => {
    METHODS.forEach((method) => {
        if (target[method]) {
            if (target[method].ignoreAuth) {
                app[method].call(app, url, target[method]);
            } else {
                app[method].call(app, url, auth, target[method]);
            }
        }
    });
};
module.exports = router;