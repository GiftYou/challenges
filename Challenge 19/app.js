const express = require('express')
const app = express()
const port = 3000
let path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const userRouter = require('./routes/index');
let cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/views')));

app.use('/',userRouter);

app.listen(port, () => {  
    console.log(`here are run on port ${port}`);
    console.log(exports);
    
});

module.exports = app;