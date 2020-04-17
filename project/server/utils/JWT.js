const crypto = require("crypto");
const secret = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const METHOD = {
    "alg": "HS256",
    "typ": "JWT"
};
const BASE64 = "base64";
const ASCII = "ascii";
const EXPIRED_DATE = "expiredDate";
const USER_ID = "userid";
const base64Encode = (data) => {
    return Buffer.from(JSON.stringify(data)).toString(BASE64);
};
const METHOD_JSON_BASE64 = base64Encode(METHOD);
const base64Decode = (data) => {
    const buff = Buffer.from(data, BASE64);
    try {
        const ret = JSON.parse(buff.toString(ASCII));
        return ret;
    } catch(e) {
        console.error(e);
        return null;
    }
};

const generateThirdPart = (content) => {
    let hmac = crypto.createHmac('sha256', secret)
        .update(content)
        .digest(BASE64);

    hmac = hmac.replace(/([/+=])/g, (match) => {
        if (match === "/")
            return "_";
        else if (match === "+")
            return "-";
        else
            return "";
    });
    return hmac;
};
const verifyPayload = (payloadObj, userid) => {
    let ret = false;
    try {
        const expiredTime = payloadObj[EXPIRED_DATE];
        if (expiredTime) {
            ret = (expiredTime > Date.now()) && payloadObj[USER_ID] === userid;
        } else {
            ret = true;
        }
    } catch (e) {
        console.error(e);
    }
    return ret;
};
const encrypt = (userid, expiredDate) => {
    let ret;
    try {
        let payloadBase64 = base64Encode({
            userid,
            expiredDate
        });
        payloadBase64 = payloadBase64.replace(/(={0,2})$/, "");
        const contents = METHOD_JSON_BASE64 + "." + payloadBase64;
        const hmac = generateThirdPart(contents);
        ret = contents + "." + hmac;
    } catch (e) {
        console.error(e);
    }
    return ret;
};
const getInfoByToken = (token, userid) => {
    let payloadObj = null;
    try {
        let tokenAry = token.split(".");
        if (generateThirdPart(tokenAry[0] + "." + tokenAry[1]) === tokenAry[2]) {
            payloadObj = base64Decode(tokenAry[1]);
            if (!verifyPayload(payloadObj, userid)) {
                payloadObj = null;
            }
        }
    } catch (e) {
        payloadObj = null;
        console.error(e);
    }
    return payloadObj;
};
const JWT = {
    encrypt,
    getInfoByToken
};

module.exports = JWT;