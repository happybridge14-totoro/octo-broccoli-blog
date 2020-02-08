const express = require("express");
const cookiePaser = require("./src/utils/cookie");
// const uuidGenerator = require("./src/utils/uuid-generator");
const indexPage = require("./src/index");
const signin = require("./src/controller/signin");
const signout = require("./src/controller/signout");
const guess = require("./src/controller/guess");
const changeTheme = require("./src/controller/change-theme");
const beginNewGame = require("./src/controller/begin-new-game");
const app = express();
const PORT = 3000;
const sessionKey = "session_id";
app.use(cookiePaser);
app.use(express.static("./public"));
app.get("/", (req, res) => {
  const indexPageContent = indexPage.render(req.cookie[sessionKey]);
  res.send(indexPageContent);
});
app.post("/beginNewGame", (req, res) => {
  const sessionId = req.cookie[sessionKey];
  const newSessionId = beginNewGame(sessionId);
  if (newSessionId !== sessionId) {
    res.cookie(sessionKey, newSessionId);
  }
  res.redirect("/");
});
app.post("/changeTheme", (req, res) => {
  const sessionId = req.cookie[sessionKey];
  changeTheme(sessionId);
  res.redirect("/");
});
app.post("/guess", express.urlencoded({ extended: false }), (req, res)=> {
  const sessionId = req.cookie[sessionKey];
  const {word} = req.body;
  guess(sessionId, word);
  res.redirect("/");
});
app.post("/signin", (req, res) => {
  const sessionId = req.cookie[sessionKey];
  signin(sessionId);
  res.redirect("/");
});
app.post("/signout", (req, res) => {
  const sessionId = req.cookie[sessionKey];
  signout(sessionId);
  res.clearCookie(sessionKey);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log(`Listerening on http://localhost:${PORT}`);
});