const express = require("express");
const cookiePaser = require("./src/utils/cookie");
// const uuidGenerator = require("./src/utils/uuid-generator");
const indexPage = require("./src/index");
const app = express();
const PORT = 3000;

app.use(cookiePaser);
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send(indexPage.render());
});
app.post("/changetheme", (req, res) => {

});
app.post("/guess", ()=> {

});
app.listen(3000, () => {
  console.log(`Listerening on http://localhost:${PORT}`);
});