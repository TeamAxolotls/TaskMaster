const express = require ('express');
const path = require ('path');
const webpack = require('webpack')
const fs = require ('fs');
const dbRouter = require('./routes/dbRoutes.js');
const mongoose = require('mongoose');
const loginRouter = require('./routes/loginRoutes.js');
const bodyParser = require('body-parser');

// initialize port to localhost 3000
const port = 3000;

// do we need to routes from routes folder here? 
// do we need to connect to mongoose database here or in routes files? 

//initialize server
const app = express();

mongoose.connect('mongodb+srv://dennishly:awkward123!@cluster0.ubkvk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.json());

// send get request to index.html

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../dist/index.html'));
})

app.use('/main', dbRouter);

app.use('/login', loginRouter);

app.use('../src/client/styles.css', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/styles.css'));
})

app.use((req, res) => {
  res.sendStatus(404);
})


app.listen(3000, ()=>{console.log(`listening on port 3000`)});