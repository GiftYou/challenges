/* ./routes/user.js */
const express = require('express');
const router = express.Router();
const fs = require('fs');
let dataparsed = JSON.parse(fs.readFileSync('data.json', 'utf8'));

router.get('/', function(req, res, next){
  res.render('index', {data: dataparsed});
});

router.post('/search', function(req, res, next) {
  
});

router.post('/add', function(req, res, next) {
  res.render('add');
});

router.post('/addR', function(req, res, next) {
  let ID = dataparsed.length + 1;

  let str = {
    "ID": ID,
    "String": req.body.String,
    "Integer": req.body.Integer,
    "Float": req.body.Float,
    "Date": req.body.Date,
    "Boolean": req.body.Boolean
  }
  dataparsed.push(str);
  fs.writeFileSync("data.json", JSON.stringify(dataparsed, null, 3, 'utf8'));
  res.redirect('/');
});

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id;
  dataparsed.splice(id, 1);
  res.redirect('/');
});

router.get('/edit/:id', function(req, res, next) {
  let dataa = dataparsed[req.params.id];
  res.render('edit', {dataa});
});

router.post('/edit', function(req, res, next) {
  for(let ii = 0; ii < dataparsed.length; ii++){
    if(dataparsed[ii].ID === Number(req.body.ID)){
      dataparsed[ii].String = req.body.String;
      dataparsed[ii].Integer = req.body.Integer;
      dataparsed[ii].Float = req.body.Float;
      dataparsed[ii].Date = req.body.Date;
      dataparsed[ii].Boolean = req.body.Boolean;
      fs.writeFileSync("data.json", JSON.stringify(dataparsed, null, 3, 'utf8'));
    }
  }
  res.redirect('/');
});

module.exports = router;