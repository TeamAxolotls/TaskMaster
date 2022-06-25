const express = require ('express');
const path = require ('path');
const webpack = require('webpack')
const fs = require ('fs');

// initialize port to localhost 3000
const port = 3000;

//initialize server
const app = express();

// send get request to index.html

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../dist/index.html'));
})

app.use('../src/client/styles.css', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/styles.css'));
})

app.use((req, res) => {
  res.sendStatus(404);
})


app.listen(3000, ()=>{console.log(`listening on port 3000`)});