import express from 'express';

const port = 8000;
const host = '127.0.0.1';
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}`);
});
