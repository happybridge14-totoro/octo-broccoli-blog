const enum TYPE {
    USERS = "users",
    CHAT = "chat"
};
interface dataObject {
    timestamp: number,
    users?: Array<string>,
    message?: Array<string>,
    type: TYPE
};
interface userObject {
    timestamp: number,
    users: Array<string>
}
interface messageBody {
    userName: string,
    message: string,
    timestamp: number
};
interface messageObject {
    timestamp: number,
    message: Array<messageBody>
};
export {TYPE, dataObject, messageBody, messageObject, userObject}