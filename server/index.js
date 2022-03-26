const connection = require('./mysql/index.js');
const express = require('express');
const bodyParser = require('body-parser');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let db;

const path = require('path');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/cowlist', (req, res) => {

  connection.query(
    'SELECT * FROM cows', (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(results);
      }
    })
})

app.post('/cowlist', (req, res) => {

  let name = req.body.name + '';
  let description = req.body.description + '';
  console.log(name);
  console.log(description);
  let query = 'INSERT INTO cows (name, description) VALUES(?,?)';

  connection.query(query, [name, description],
    (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(results);
      }
    })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
