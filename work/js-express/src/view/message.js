const { getMessageList } = require("../model/data");

let messagesHtml = "";
let lastestDay = "";
const addDivider = (dateString) => {
    const dayStrings = dateString.split(" ");
    return `<section class="chatroom-timestamp-divider">
                <div class="divider"></div>
                <div class="timestamp-date">${dayStrings[0]},${dayStrings[1]} ${dayStrings[2]}</div> 
            </section>\n`
};
const addContent = (sender, content, timeString) => {
    return `<li>
        <p>
            <span class="message-sender">${sender}</span>
            <span class="message-time">${timeString}</span>
        </p>
        <p class="message-content">${content}</p>
    </li>\n`
};

const update = (sender, message, timestamp) => {
    const addedDate = new Date(timestamp);
    const dateString = addedDate.toDateString();
    if (lastestDay !== dateString) {
        messagesHtml += addDivider(dateString);
        lastestDay = dateString;
    }
    const timeString = addedDate.toTimeString().split(" ")[0];
    messagesHtml += addContent(sender, message, timeString);
};
const render = () => {
    return messagesHtml;
};
module.exports = { update, render };