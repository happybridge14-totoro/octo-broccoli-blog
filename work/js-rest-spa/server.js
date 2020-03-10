const express = require("express");
const app = express();
const cookieParser = require("./src/utils/cookie");
const path = require("path");
const PORT = 3000;
const ERROR_404 = 404;

app.use(cookieParser);
app.use(express.static("/public"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});
app.get("/session", (req, res) => {
    res.redirect("/");
});
app.post("/session", (req, res) => {

});
app.delete("/item/:itemId", (req, res) => {

});
app.get("/items", (req, res) => {

});
app.post("/items", (req, res) => {

});
app.use((req, res) => {
    res.sendStatus(ERROR_404);
});
app.listen(PORT, () => {
    console.log("Listerning to " + PORT);
});