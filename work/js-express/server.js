const express = require('express');
const app = express();
const PORT = 3000;

const indexPage = require('./src/index')

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(indexPage.render());
});

app.post('/sendMessage', express.urlencoded({ extended: false }), (req, res) => {
  const { content, sender, timestamp=new Date() } = req.body;
  if (content && sender) {
    indexPage.update(sender, content, timestamp);
  }
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
