const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

// VIEWS

app.set('views/', './views');
app.set('view engine', 'ejs');


// MIDDLEWARE

// use permet d'indiquer quelles sont les middleware à utiliser
// ici ici on ajoute le middleware afin de pouvoir utiliser des fichiers statics

app.use('/public',express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }))


// ROUTER

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/movies', (req, res) => {
  res.render('movies/index');
})

app.get('/movies/add', (req, res) => {
  res.render('movies/create');
})

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/movies/add', urlencodedParser, (req, res) => {
  console.log(req.body)
  res.sendStatus(201)
})

app.get('/movies/search', (req, res) => {
  res.render('movies/search')
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  res.render('movies/show', { movieId : id });
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${3000}`);
})