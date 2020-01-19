const express = require('express');
const app = express();

const PORT = 3000;

// VIEWS

app.set('views/', './views');
app.set('view engine', 'ejs');


// ROUTER

app.get('/', (req, res) => {
  res.send('hello world !')
})

app.get('/movies', (req, res) => {
  res.send('movies')
})

app.get('/movies/add', (req, res) => {
  res.send('formulaire d\'ajout')
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  res.send(`film number ${id}`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${3000}`)
})