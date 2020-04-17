const express = require('express');
const app = express();
const cookieParser = require('./middleware/cookie-parser');
const routes = require('./routes');
const PORT = 5000;

app.use(express.json());
app.use(cookieParser);
app.use(express.static('./build'));
app.route('/session', (req, res)=>{
    console.log("hello");
    res.write("hello");
    res.end();
});
app.get('/test/:id/name/:nameid', (req, res)=>{
    console.log("hello");
    console.log(req.params.id);
    console.log(req.params.nameid);
    res.write("hello");
    res.end();
});
// app.post('/session', routes.session.create);
// app.delete('/session', routes.session.remove);

// app.get('/theme/:username', routes.theme.read);
// app.put('/theme/:username', routes.theme.update);

// app.get('/tasks/:username', routes.tasks.all.read);
// app.delete('/tasks/:username', routes.tasks.all.remove);
// app.post('/tasks/:username', routes.tasks.one.add);
// app.get('/tasks/:username/:taskId', routes.tasks.one.read);
// app.put('/tasks/:username/:taskId', routes.tasks.one.update);
// app.delete('/tasks/:username/:taskId', routes.tasks.one.remove);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );