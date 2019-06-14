const express = require('express')
const app = express()
const port = 3000
var path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
// const rawData = fs.readFileSync('data.json')
// const data = JSON.parse(rawData)
// const data = fs.readFileSync(JSON.parse('data.json'))
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))

const Router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname + '/views')));
let Str;

app.get('/', function (req, res) {
  console.log(Str);
  
  res.render('index', {data: data});
  
  });

// app.post('/', function (req, res) {
//   console.log(req.body.Float);
//   res.render('/');
// })

app.get('/edit/:id', function (req, res) {
  let dataa = data[req.params.id];
  res.render('edit', {dataa});
})

app.post('/edit', function (req, res) {
  for(let ii = 0; ii < data.length; ii++){
    if(data[ii].ID === Number(req.body.ID)){
      data[ii].String = req.body.String;
      data[ii].Integer = req.body.Integer;
      data[ii].Float = req.body.Float;
      data[ii].Date = req.body.Date;
      data[ii].Boolean = req.body.Boolean;
      fs.writeFileSync("data.json", JSON.stringify(data, null, 3, 'utf8'));
      
    }
    
  }
  
  res.redirect('/');
})

app.get('/delete/:id', function (req, res) {
  let id = req.params.id;
  data.splice(id, 1);
  res.redirect('/');
});

app.post('/search', function(req, res){
  // console.log(req.body.Float);
  // res.render('edit');
  Str = req.body.String;
  res.send(req.body.ID);
  res.send(req.body.String);
  res.send(req.body.Integer);
  res.send(req.body.Float);
  res.send(req.body.Date);
  res.send(req.body.Boolean);
  res.send(req.body.Boolean);
  res.redirect('/', {Str})

});
  
app.post('/add', function (req, res) {
  res.render('add');
});

app.post('/addR', function (req, res) {
  let ID = data.length + 1;

  // let dex;
  // for(let ii = 0; ii < data.length; ii++){
  //   for(let uu = 0; uu < data.length; uu++){
  //     if(data[uu].ID > data[ii].ID){
  //       return dex;
  //     }else{
  //       dex = ii;
  //     }

  //     if(data[uu].ID > data[ii].ID){
  //       dex = data[uu].ID
  //       console.log(dex);
        
  //     }

  //     while(data[uu].ID <= data[ii].ID){
  //       dex++;
  //     }
  //   }
  // }
  
  // console.log(dex);
  
  
  
  let str = {
    "ID": ID,
    "String": req.body.String,
    "Integer": req.body.Integer,
    "Float": req.body.Float,
    "Date": req.body.Date,
    "Boolean": req.body.Boolean
  }
  data.push(str);
  fs.writeFileSync("data.json", JSON.stringify(data, null, 3, 'utf8'));
  res.redirect('/');
  
});

// home page route (http://localhost:8080)
// router.get('/', function(req, res) {
//   res.send('im the home page!');  
// });

// about page route (http://localhost:8080/about)
Router.get('/about', function(req, res) {
  res.send('im the about page!'); 
});

app.use(Router);

app.listen(port, () => {  
    console.log(`here are run on port ${port}`);
    console.log(exports);
    
});