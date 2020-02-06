//Simple cookie parser instead of express cookie parser (we are not using signed cookie)
const parseCookie = (req, res, next) => {
    req.cookie = {};
    if (!req.headers.cookie) {
        return next();
    }
    const cookieStrings = req.headers.cookie.split("; ");
    cookieStrings.forEach(oneCookie => {
       const [cookieKey, cookieValue] = oneCookie.split("="); 
       req.cookie[cookieKey] = cookieValue;
    });
    return next();
};
module.exports = parseCookie;