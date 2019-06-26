const express = require('express')
const app = express()
const port = 3000
var path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/views')));

app.use('/', index);

app.listen(port, () => {
    console.log(`server run on ${port}`);
    
});