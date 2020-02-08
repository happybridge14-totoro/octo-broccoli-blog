const express = require("express");
const cookiePaser = require("./src/utils/cookie");
// const uuidGenerator = require("./src/utils/uuid-generator");
const indexPage = require("./src/index");
const signin = require("./src/controller/signin");
const signout = require("./src/controller/signout");
const guess = require("./src/controller/guess");
const changeTheme = require("./src/controller/change-theme");
const app = express();
const PORT = 3000;
const sessionKey = "session_id";
app.use(cookiePaser);
app.use(express.static("./public"));
app.get("/", (req, res) => {
  const indexPageContent = indexPage.render(req.cookie[sessionKey]);
  res.send(indexPageContent);
});
app.post("/changeTheme", (req, res) => {
  const session = req.cookie[sessionKey];
  changeTheme(session);
  res.redirect("/");
});
app.post("/guess", (req, res)=> {
  const sessionid = req.cookie[sessionKey];
  guess(session);
  res.redirect("/");
});
app.post("/signin", (req, res) => {
  const sessionId = req.cookie[sessionKey];
  signin(session);
  res.redirect("/");
});
app.post("/signout", (req, res) => {
  const sessionId = req.cookie[sessionKey];
  signout(sessionKey);
  res.clearCookie(sessionKey);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log(`Listerening on http://localhost:${PORT}`);
});