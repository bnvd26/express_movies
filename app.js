const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world !')
})

app.get('/movies', (req, res) => {
  res.send('movies')
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  res.send(`film number ${id}`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${3000}`)
})