const express = require('express');
const app = express();
const cookieParser = require('./middleware/cookie');
const router = require("./utils/router");
const session = require("./session");
const user = require("./user");
const article = require("./article");
const PORT = 5000;

app.use(express.json());
app.use(cookieParser);
app.use(express.static('./build'));

router(app, "/session", session);
router(app, "/user/:id", user.one);
router(app, "/user/:id/theme", user.theme);
router(app, "/user/:id/displayName", user.displayName);
router(app, "/user/:id/contactInfo", user.contactInfo);
router(app, "/user/:id/education", user.education);
router(app, "/user/:id/experience", user.experience);
router(app, "/user/:id/skills", user.skills);
router(app, "/article", article.all);
router(app, "/article/:id", article.one);
router(app, "/article/:id/thumbsup", article.thumbsup);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );