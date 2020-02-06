const express = require("express");
const app = express();
const cookiePaser = require("./utils/cookie");
const uuidGenerator = require("./utils/uuid-generator");

app.use(cookiePaser);
app.get("/", (req, res) => {
    console.log(req.headers);
    res.cookie("test", "a test");
  res.send("hello");
});

app.listen(3000, () => {
    console.log("Listerening to 3000");
});