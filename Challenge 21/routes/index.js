var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = (pool) => {
  router.get('/', function(req, res, next) {
    let page = req.query.page || 1;
    // for the limit every page
    let limit = 3;
    // begin of index
    let offset = (page - 1) * limit;
    // const url = req.url == '/' ? '/?page=1' : req.url
    const url = req.url == '/' ? '/?page=1' : req.url

    let flek = false;
    let id = req.query.ID;
    let string = req.query.String || 0;
    let integer = req.query.Integer || 0;
    let float = req.query.Float || 0;
    let sdate = req.query.sDate || 0;
    let edate = req.query.eDate || 0;
    let boolean = req.query.Boolean || 'Choose';
    let arr = [];


    if(req.query.CheckID != undefined){arr.push(`id=${id} `)
    flek = true}
    if(req.query.CheckSTRING != undefined){arr.push(`string LIKE '%${string}%' `)
    flek = true}
    if(req.query.CheckINTEGER != undefined){arr.push(`integer=${integer} `)
    flek = true}
    if(req.query.CheckFLOAT != undefined){arr.push(`float='${float}' `)
    flek = true}
    if(req.query.CheckDATE != undefined){arr.push(`date>='${sdate}' `);
    arr.push(`date<='${edate}' `)
    flek = true}
    if(req.query.CheckBOOLEAN != undefined){arr.push(`boolean='${boolean}' `)
    flek = true}
    
    let arr2 = [req.query.ID, req.query.String, req.query.Integer,
      req.query.Float, req.query.Date, req.query.Boolean]

    let sql = 'SELECT COUNT(*) as total FROM data'
    if(flek){
      sql+= ` WHERE ${arr.join(' AND ')}`
    }
    pool.query(sql , (err, data) => {
      if(err) res.send(err);

      let total = data.rows[0].total;
      let pages = Math.ceil(total / limit)
      let sql = 'SELECT * FROM data';
      if(flek){
        sql+= " WHERE " + arr.join(" AND ");
      }
      sql+= ` ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`;
      pool.query(sql , (err, data) => {
        console.log(total);
        
        res.render('index', { data: data.rows, pages: pages, page: page, url , arr2});
      })
    })
  });

  router.get('/edit/:id', function(req, res, next){
    pool.query(`SELECT * FROM data WHERE id = ${req.params.id}` , (err, data) => {
      let dataa = data.rows[0];
      res.render('edit', {dataa: dataa})
    });
  })

  router.get('/add', (req, res) => {
    res.render('add', { title: 'Tambah data' })
  })

  router.post('/add', (req, res) => {

    const sql = 'INSERT INTO data (string,integer,float,date,boolean) VALUES ($1,$2,$3,$4,$5)'
    const values = [req.body.String, parseInt(req.body.Integer), parseFloat(req.body.Float), req.body.Date, JSON.parse(req.body.Boolean)]
    pool.query(sql, values, (err, data) => {
      if (err) res.send(err)
      res.redirect('/');
    })
  })

  router.post('/edit', function(req, res, next){

    let str = "UPDATE data SET string = $1,";
        str+= " integer = $2,";
        str+= " float = $3,";
        str+= " date = $4,";
        str+= " boolean = $5";
        str+= " WHERE id = $6;"

    let data = [req.body.String, parseInt(req.body.Integer), parseFloat(req.body.Float), req.body.Date, JSON.parse(req.body.Boolean), parseInt(req.body.ID)]
    console.log(req.body.lahir)
    pool.query(str, data, (err, data) => {
      if(err) res.send(err)
      res.redirect('/')
    })
});

router.get('/delete/:id', function(req, res, next){
  let str = "DELETE FROM data WHERE id = $1";
  let data = [req.params.id]
  pool.query(str, data, (err, data) => {
    res.redirect('/');
  })
})

  return router;
}
