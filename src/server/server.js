const express = require ('express');
const path = require ('path');

const app = express();
const port = 3000;
app.listen(3000, ()=>{console.log(`listening on port 3000`)});