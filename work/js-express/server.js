const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./src/chat');
const chatWeb = require('./src/chat-web');
const indexPage = require('./src/index')

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(indexPage.render());
});

app.post('/sendMessage', express.urlencoded({ extended: false }), (req, res) => {
  // const { text, sender } = req.body;
  // chat.addMessage({ sender, text });
  indexPage.update();
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
