var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;
let assert = require('assert');
// let mongodb = require('mongodb')
var url = 'mongodb://localhost:27017'
const client = MongoClient(url)
const dbName = 'data';

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, {useNewUrlParser: true},function(err, clientt) {
    const db = clientt.db(dbName);
    // console.log(client.db('data'));
    const col = db.collection('data');
    // col.data().listDatabases().then(function(databases){console.log("error from / are:     "+ databases)});
    let arr = {};

    let page = req.query.page || 1;
    // for the limit every page
    let limit = 3;
    // begin of index
    let offset = (page - 1) * limit;
    // const url = req.url == '/' ? '/?page=1' : req.url
    const url = req.url == '/' ? '/?page=1' : req.url
    let arr2 = [req.query.ID, req.query.String, req.query.Integer,
      req.query.Float, req.query.Date, req.query.Boolean]

    if(req.query.CheckID != undefined){arr['_id'] = req.query.ID }
    if(req.query.CheckSTRING != undefined){arr['string'] = req.query.String}
    if(req.query.CheckINTEGER != undefined){arr['integer'] = parseInt(req.query.Integer);}
    if(req.query.CheckFLOAT != undefined){arr['float'] = req.query.Float;}
    if(req.query.CheckDATE != undefined){arr['date'] = {
      $gt: req.query.sdate,
      $lt: req.query.edate
    }}
    if(req.query.CheckBOOLEAN != undefined){arr['boolean'] = JSON.parse(req.query.Boolean)}

    col.count( arr,(err,total) => {
      let pages = Math.ceil(total / limit)
      col.find(arr).limit(3).skip(offset).toArray(function(err, docs){
        if(err) console.log(err);
        console.log(typeof(req.query.String));
        
        res.render('index', {data: docs, pages, page, url, arr2});
      });
    })
  })
  
  // mongodb.connect(url,{ useNewUrlParser: true }, function(err, db){
  //   if(err) console.log(err);
    
  //   res.render('index', { title: 'hai' });
  //   db.close();
  // })
  
});

router.get('/add', (req, res) => {
  
  res.render('add')
})

router.post('/add', (req, res) => {
  MongoClient.connect(url, {useNewUrlParser: true},function(err, client) {
    const db = client.db(dbName);
    if(err) console.log("first error are:     " + err);
    db.collection('data').insertOne({
      string: req.body.String,
      integer: parseInt(req.body.Integer),
      float: parseFloat(req.body.Float),
      date: req.body.Date,
      boolean: JSON.parse(req.body.Boolean)
      }, function(err, r) {
      if(err){
        console.log("the error was:     "+err); 
        res.redirect('/add');
      } 
      db.collection('data').find({}).toArray(function(err, docs) {
        console.log("done the result are:     "+docs); 
        res.redirect('/');
      });
    })
    
  })
});


router.get('/edit/:id', (req, res)=>{
  MongoClient.connect(url, {useNewUrlParser: true},function(err, clientt) {
    const db = clientt.db(dbName);
    const col = db.collection('data')

    // col.find({ _id: new mongodb.ObjectID(`${req.params.id}`) }).toArray((err, dataa)=> {
    //   if(err) console.log(err);
    //   console.log(dataa);
      
    //   )
    // })
    
    col.find({_id: new ObjectID(req.params.id) }).toArray(function(err, docs){
      console.log(docs[0]);
      
      res.render('edit', {dataa: docs[0]})
    })
  })
})

  router.post('/edit', function(req, res, next){
    MongoClient.connect(url, {useNewUrlParser: true},function(err, clientt) {
      const db = clientt.db(dbName)
      const col = db.collection('data')
      col.updateOne(
        {
          _id: ObjectID(
            req.body.ID
          )
        },
        {
          $set: {
            string: req.body.String,
            integer: parseInt(req.body.Integer),
            float: parseFloat(req.body.Float),
            date: req.body.Date,
            boolean: JSON.parse(req.body.Boolean)
          }
        },
        (err, hasil) => {
          if (err) console.log(err);
          
          res.redirect('/')
        })
    })
  })

  router.get('/delete/:id', function(req, res, next){
    MongoClient.connect(url, {useNewUrlParser: true},function(err, clientt) {
      const db = clientt.db(dbName)
      const col = db.collection('data');

      col.deleteOne({
        _id: ObjectID(req.params.id)
      },
      (err, data) => {
        if(err) console.log(err);
        res.redirect('/')
      }
      )
    })
  })

  // mongodb.connect(url,{ useNewUrlParser: true }, (err, client) => {
  //   let col = client.db('data')
  //   if(err) res.send(err)
  //   let Booolean = JSON.parse(req.body.Boolean);
  //   col.insertOne({ 
  //     string: req.body.String,
  //     integer: parseInt(req.body.Integer),
  //     float: parseFloat(req.body.Float),
  //     date: req.body.Date,
  //     boolean: Booolean,
  //   }, (err, hasil) => {
  //     if (err){
  //       console.log(err);
  //       res.redirect('add')
  //    } 
  //     console.log(hasil);
  //     res.redirect('/');
  //   })
  // })


module.exports = router;
