const express = require('express');
const fs = require('fs');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');
const window = function windo() {
    let windoo = confirm("check this");
    if(windo == true){
        res.redirect('/');
    }else{
        res.redirect('/');
    }
}

router.get('/', function(req, res, next){
    // which page are selected
    // default empty or inserted page with number 1
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
    if(req.query.CheckFLOAT != undefined){arr.push(`TEXT='${float}' `)
    flek = true}
    if(req.query.CheckDATE != undefined){arr.push(`date>='${sdate}' `);
    arr.push(`date<='${edate}' `)
    flek = true}
    if(req.query.CheckBOOLEAN != undefined){arr.push(`boolean='${boolean}' `)
    flek = true}

    // for count all item in 'data' table
    let sql = `SELECT COUNT(*) AS total FROM data`;
    if(flek){
        sql+= ` WHERE ${arr.join(' AND ')}`
    }

    db.all(sql, function(err, rows) {
        //the result after getting count return an object
        let total = rows[0].total;
        let pages = Math.ceil(total / limit)
        sql = "SELECT * FROM data ";
        // if(arr.length > 0){
        //     sql+= ` LIMIT ${limit} OFFSET ${offset}`;
        // }

        if(flek){
            sql+= " WHERE " + arr.join(" AND ");
        }
        sql+= ` ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`;
        db.all(sql, [], (err, row)=> {
            // url.concat('&page=1');
            if(err)throw err;
            res.render('index', {data: row, pages: pages, page: page, url});
        });
    })
});

router.get('/add', function(req, res, next){
    res.render('add');
});

router.get('/test/:params1', function(req, res, next){
    console.log(req.query.item1);
    res.redirect('/')
});
    

router.get('/edit/:id', function(req, res, next){
    db.all(`SELECT * FROM data WHERE id = ${req.params.id}`, function(err, rows){
        console.log(req.params.id);
        let dataa = rows[0];
        res.render('edit', {dataa})
    });
});

router.get('/delete/:id', function(req, res, next){

    // let confrm = window.confirm("you sure?");
    
    db.serialize(function() {
        let str = "DELETE FROM data WHERE id = ?";
        let stmt = db.prepare(str);
        stmt.run(req.params.id);
        stmt.finalize();
    });
    res.redirect('/');
        
});

router.get('/search', function(req, res, next){
        
        let temp = [];
        let flek = false;
        let id = req.query.ID;
        let string = req.query.String || 0;
        let integer = req.query.Integer || 0;
        let float = req.query.Float || 0;
        let sdate = req.query.sDate || 0;
        let edate = req.query.eDate || 0;
        let boolean = req.query.Boolean || 'Choose';
        let arr = [];
        

        if(req.query.CheckID != undefined){arr.push(`id=${id} `);}
        if(req.query.CheckSTRING != undefined){arr.push(`string LIKE '%${string}%' `);}
        if(req.query.CheckINTEGER != undefined){arr.push(`integer=${integer} `);}
        if(req.query.CheckFLOAT != undefined){arr.push(`TEXT='${float}' `);}
        if(req.query.CheckDATE != undefined){arr.push(`date<='${sdate}' `);arr.push(`date>='${edate}' `);}
        if(req.query.CheckBOOLEAN != undefined){arr.push(`boolean='${boolean}' `);}

        if(arr.length > 0){
            let sql = "SELECT * FROM data WHERE "+arr.join(" AND ");

            db.all(sql, [], (err, rows)=> {
            let sql2 = "SELECT COUNT(*) AS total FROM data ";
            let page = req.query.page || 1;
            let limit = 3;
            let offset = (page - 1) * limit;

                // db.all(sql2, function(err, row) {
                //     console.log(row);
                // });

                
                
            });
            
            // let sql = "SELECT COUNT(*) AS total FROM data ";
            // let page = req.query.page || 1;
            // let limit = 3;
            // let offset = (page - 1) * limit;

            // db.all(sql, function(err, rows) {
            //     let total = rows[0].total;
            //     let pages = Math.ceil(total / limit)
            //     let sql = "SELECT * FROM data WHERE "+arr.join(" AND ") + `LIMIT ${limit} OFFSET ${offset}`;

            //     db.all(sql, [], (err, row)=> {
            //         console.log(rows);
                    
            //         if(err)throw err;
            //         res.render('index', {data: row, pages: pages, page: page});
            //     });
            // });
        }else{
            res.redirect('/');
        }


        // if(arr.length > 0){
        //     let sql = "SELECT COUNT(*) AS total FROM data ";
        //     let page = req.query.page || 1;
        //     let limit = 3;
        //     let offset = (page - 1) * limit;

        //     db.all(sql, function(err, rows) {
        //         let total = rows[0].total;
        //         let pages = Math.ceil(total / limit)
        //         let sql = "SELECT * FROM data WHERE "+arr.join(" AND ") + `LIMIT ${limit} OFFSET ${offset}`;

        //         db.all(sql, [], (err, row)=> {
        //             console.log(rows);
                    
        //             if(err)throw err;
        //             res.render('index', {data: row, pages: pages, page: page});
        //         });
        //     });
        // }else{
        //     res.redirect('/');
        // }


});

// router.post('/search', function(req, res, next){
//     let str;
//     let stmt;
//     db.all("SELECT * FROM data", function(err, row){
//         db.serialize(function() {
//             str = "SELECT * FROM data WHERE id > 9";
//             stmt = db.prepare(str);
//             stmt.run(req.params.id);
//             stmt.finalize();
//             console.log(stmt);
//         });
//     });

//     let page = req.query.page;
//     console.log(page);
//     res.redirect('/');

//     db.all("SELECT * FROM data WHERE id > 9", function(err, row){
//         res.render('index', {data: row});
//     });
// });
    

router.post('/edit', function(req, res, next){
    // db.all("SELECT * FROM data", function(err, row){
    //     for(let i = 0; i < row.length; i++){
    //         if(row[i].id === Number(req.body.ID)){
    //             console.log(row[i]);
    //             res.redirect('/');
    //         }
    //     }
    // });

    db.serialize(function() {
        let str = "UPDATE data SET string = ?,";
        str+= " integer = ?,";
        str+= " TEXT = ?,";
        str+= " date = ?,";
        str+= " boolean = ?";
        str+= " WHERE id = ?;"
        var stmt = db.prepare(str);
        let string = req.body.String;
        let Integer = req.body.Integer;
        let Float = req.body.Float;
        let date = req.body.Date;
        let boolean = req.body.Boolean;
        let id = req.body.ID;
        stmt.run(string, Integer, Float, date, boolean, id);
        stmt.finalize();
      });
    res.redirect('/');
});

router.post('/add', function(req, res, next){
    db.serialize(function() {
        var stmt = db.prepare("INSERT INTO data VALUES (?,?,?,?,?,?)");
        let string = req.body.String;
        let Integer = req.body.Integer;
        let Float = req.body.Float;
        let date = req.body.Date;
        let boolean = req.body.Boolean;
        stmt.run(null, string, Integer, Float, date, boolean);
        stmt.finalize();
      });
    res.redirect('/');
});

function name(params) {
    
}

// db.serialize(function(){
//     let sql = "INSERT INTO user(id, dt) VALUES(1, 'connor')";
//     db.run(sql, (err) => {
//         if(err) throw err;
//         console.log("inserted into table.!!");
//     });
// });

module.exports = router;