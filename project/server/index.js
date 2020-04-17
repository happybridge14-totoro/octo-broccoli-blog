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
router(app, "/user/:id", user);
router(app, "/article", article.all);
router(app, "/article/:id", article.one);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );