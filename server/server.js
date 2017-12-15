const express = require('express');
const app = express();

const bodyparser = require('body-parser')

const controller = require('./controller/controller');

const port = 9001;
app.use(bodyparser.JSON());






app.listen(port, ()=>{
    console.log(`This is running OVER 9000 on port ${port}`);
})