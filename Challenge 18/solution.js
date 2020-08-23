// require('events').EventEmitter.prototype._maxListeners = 1;
const events = require('events');
const emitter = new events();
const Table = require('cli-table3')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('University.db');

function queryNamaMahasiswa(params) {
  // open the database
let sql = `SELECT * FROM mahasiswa`;

var table2 = new Table({
  head: ['nama mahasiswa', 'kode jurusan', 'nim', 'kode jurusan'],
  colWidths: [100, 200]
})
 
console.log(table2.toString());

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    // console.log(row.nama_mahasiswa); 

    // ---
  var table = new Table({
    colWidths: [100, 200]
}); 
// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    [row.nim , row.nama_mahasiswa, row.alamat, row.kode_jurusan]
);
 
console.log(table.toString());
  // ---
  });
});
}

function querySingleMahasiswa(params) {
  // -----------

  // open the database
  // let sql = `SELECT * FROM mahasiswa WHERE nim = 213445`;
  let sql = `SELECT * FROM mahasiswa WHERE nim = ${params}`;

  var table2 = new Table({
    head: ['nama mahasiswa', 'kode jurusan', 'nim', 'kode jurusan'],
    colWidths: [100, 200]
  })
   
  console.log(table2.toString());
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      // console.log(row.nama_mahasiswa); 
  
      // ---
    var table = new Table({
      colWidths: [100, 200]
  }); 
  // table is an Array, so you can `push`, `unshift`, `splice` and friends
  table.push(
      [row.nama_mahasiswa]
    
  );
   
  console.log(table.toString());
  
    // ---
    });
  });
  // ----------
  
}

function AddMahasiswaNIM(nim, nama_mahasiswa, alamat, kode_jurusan, umur, kode_mk, nip) {
  db.run(`INSERT INTO mahasiswa (nim, nama_mahasiswa, alamat, kode_jurusan, umur, kode_mk, nip) VALUES(${nim}, '${nama_mahasiswa}', '${alamat}', '${kode_jurusan}', '${umur}', '${kode_mk}', '${nip}');`);
}

function DeleteMahasiswaNIM(nim) {
  db.run(`DELETE FROM mahasiswa WHERE nim = ${nim}`)
}

function queryNamaJurusan(params) {
    // open the database
  let sql = `SELECT * FROM jurusan`;
   
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.nama_jurusan);
    });
  });
  // close the database connection
  }

function querySingleJurusan(params) {
    let sql = `SELECT * FROM jurusan WHERE kode_jurusan = ${params}`;

  var table2 = new Table({
    head: ['kode jurusan', 'nama jurusan'],
    colWidths: [100, 200]
  })
   
  console.log(table2.toString());
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      // console.log(row.nama_mahasiswa); 
  
      // ---
    var table = new Table({
      colWidths: [100, 200]
  }); 
  // table is an Array, so you can `push`, `unshift`, `splice` and friends
  table.push(
      [row.nama_jurusan]
    
  );
   
  console.log(table.toString());
  
    // ---
    });
  });
}

function AddJurusanNIM(kode_jurusan, nama_jurusan){
    db.run(`INSERT INTO jurusan (kode_jurusan, nama_jurusan) VALUES(${kode_jurusan}, '${nama_jurusan}');`);
}

function DeleteJurusanNIM(kode_jurusan) {
    db.run(`DELETE FROM jurusan WHERE kode_jurusan = ${kode_jurusan}`)
}

function queryNamaDosen(params) {
    let sql = `SELECT * FROM dosen`;
   
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.nama);
    });
  });
  // close the database connection
  }
  function querySingleDosen(params) {
    let sql = `SELECT * FROM dosen WHERE nip = ${params}`;
  
    var table2 = new Table({
      head: ['nip', 'nama dosen'],
      colWidths: [100, 200]
    })
     
    console.log(table2.toString());
    
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        // console.log(row.nama_mahasiswa); 
    
        // ---
      var table = new Table({
        colWidths: [100, 200]
    }); 
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        [row.nip, row.nama]
      
    );
     
    console.log(table.toString());
    
      // ---
      });
    });
    // ----------
    
  }

  function AddDosenNIM(nip, nama) {
    db.run(`INSERT INTO dosen (nip, nama) VALUES(${nip}, '${nama}');`);
  }

  function DeleteDosenNIM(nip) {
    db.run(`DELETE FROM dosen WHERE nip = ${nip}`)
}

  function queryMataKuliah(params) {
    let sql = `SELECT * FROM matakuliah`;
   
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.nama);
    });
  });
  // close the database connection
  }

  function querySingleMatakuliah(params) {
    let sql = `SELECT * FROM matakuliah WHERE kode_mk = ${params}`;
  
    var table2 = new Table({
      head: ['kode_mk', 'sks', 'nama matakuliah'],
      colWidths: [100, 200]
    })
     
    console.log(table2.toString());
    
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        // console.log(row.nama_mahasiswa); 
    
        // ---
      var table = new Table({
        colWidths: [100, 200]
    }); 
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        [row.kode_mk, row.sks, row.nama]
      
    );
     
    console.log(table.toString());
    
      // ---
      });
    });
    // ----------
    
  }

  function AddMatakuliahNIM(kode_mk, sks, nama) {
    db.run(`INSERT INTO matakuliah (kode_mk, sks, nama) VALUES(${kode_mk}, '${sks}', '${nama}');`);
  }

  function DeleteMatakuliahNIM(kode_mk) {
    db.run(`DELETE FROM matakuliah WHERE kode_mk = ${kode_mk}`)
}

  function AddDosenNIM(nip, nama) {
    db.run(`INSERT INTO dosen (nip, nama) VALUES(${nip}, '${nama}');`);
  }

  function queryKontrak() {
    let sql = `SELECT * FROM kontrak`;
   
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {

        var table2 = new Table({
            head: ['ID', 'nim', 'nip', 'kode jurusan', 'kode matakuliah','nilai'],
            colWidths: [100, 200]
          })

        table2.push(
            [row.ID, row.nim, row.nip, row.kode_jurusan, row.kode_mk, row.nilai]
          
        );
         
        console.log(table2.toString());
    });
  });
  // close the database connection
  }

  function querySingleKontrak(params) {
    let sql = `SELECT * FROM kontrak WHERE ID = ${params}`;
  
    var table2 = new Table({
      head: ['ID', 'nim', 'nip', 'kode jurusan', 'kode matakuliah', 'nilai'],
      colWidths: [100, 200]
    })
     
    console.log(table2.toString());
    
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        // console.log(row.nama_mahasiswa); 
    
        // ---
      var table = new Table({
        colWidths: [100, 200]
    }); 
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        [row.ID, row.nim, row.nip, row.kode_jurusan, row.kode_mk, row.nilai]
      
    );
     
    console.log(table.toString());
    
      // ---
      });
    });
    // ----------
    
  }

  function AddKontrakNIM(ID, nim, nip, kode_jurusan, kode_mk, nilai) {
    db.run(`INSERT INTO kontrak (ID, nim, nip, kode_jurusan, kode_mk, nilai) VALUES(${ID}, '${nim}', '${nip}', '${kode_jurusan}', '${kode_mk}', '${nilai}');`);
  }

  function DeleteKontrakNIM(ID) {
    db.run(`DELETE FROM kontrak WHERE ID = ${ID}`)
}


let account = ['rubi', 'rubipass']
let counr = 0;


console.log('login');
console.log('');
rl.on('line', (input) => {
  rl.on('line', (input2) => {
    if(counr === 2){
    
    }else{
  
      let sql = 'SELECT * FROM akun'
      
      db.all(sql, [], (err, rows) => {
          rows.forEach((row) => {
              console.log(row.id);
  
              if(input === row.id && input2 === row.pass){
                  counr+= 2;
                console.log('thats it');
                ques();
              }else{
                console.log('fail to hack XD');
                exit();
              }
          });
      });
    }
  });
    
});


function ques(params) {
  let str = 'welcome, rubi. Your access level is:ADMIN \n';
  str+= '';
  str+= 'silahkan pilih opsi di bawan ini \n';
    str += '[1] Mahasiswa \n';
    str+= '[2] Jurusan \n';
    str+= '[3] dosen \n';
    str+= '[4] mata kuliah \n';
    str+= '[5] kontrak \n';
    str+= '[6] keluar \n';
  console.log(str);

  rl.on('line', (input) => {
    if(input === '1'){
        mahasiswaMenu();
    }else if(input === '2'){
        jurusanMenu();
    }else if(input === '3'){
        dosenMenu();
    }else if(input === '4'){
        MataKuliahMenu();
    }else if(input === '5'){
        kontrakMenu();
    }else if(input === '6'){
        exit();
    }else if(input === 'tab'){
      querySingleMahasiswa()
    }
    else if(input === 'logout'){
        console.log('kamu sudah keluar');
        
        rl.close()
    }
  });
}

// Mahasiswa Menu
function mahasiswaMenu(params) {
  let str = 'silahkan piih opsi di bawah ini \n';
  str+= '[1] daftar murid \n';
  str+= '[2] cari murid \n';
  str+= '[3] tambah murid \n';
  str+= '[4] hapus murid \n';
  str+= '[5] kembali \n';
  console.log(str);

  rl.on('line', (inputM) => {
    if(inputM === '1'){
        queryNamaMahasiswa()
    }else if(inputM === '2'){
      querySingleMahasiswaMenu()
    }else if(inputM === '3'){
      addMahasiswaMenu();
    }else if(inputM === '4'){
        delMahasiswaMenu();
    }else if(inputM === '5'){
        ques();
    }else if(inputM === 'cls'){
        rl.close();
    }
  });
}

function addMahasiswaMenu(params) {
  
  console.log('this');

  rl.question('What do you think of Node.js? ', (input1) => {
    rl.question('What do you think of Node.js? ', (answer2) => {
      rl.question('What do you think of Node.js? ', (answer3) => {
        rl.question('What do you think of Node.js? ', (answer4) => {
          rl.question('What do you think of Node.js? ', (answer5) => {
            rl.question('What do you think of Node.js? ', (answer6) => {
              rl.question('What do you think of Node.js? ', (answer7) => {
                AddMahasiswaNIM(input1, answer2, answer3, answer4, answer5, answer6, answer7);
                console.log('hope this work');
                rl.exit(0);
              })
            })
          })
        })
      })
    })
  });
}

function delMahasiswaMenu() {
    rl.question('masukan nim yang ingin di hapus', (input) => {
        DeleteMahasiswaNIM(input)
    });
}

function querySingleMahasiswaMenu(params) {
  let str = 'silahkan masukan nim yang ingin dicari';
  console.log(str);
  rl.on('line', (inputM) => {
    querySingleMahasiswa(inputM)
  });
}

function jurusanMenu(params) {
    let str = 'silahkan piih opsi di bawah ini \n';
  str+= '[1] daftar jurusan \n';
  str+= '[2] cari jurusan \n';
  str+= '[3] tambah jurusan \n';
  str+= '[4] hapus jurusan \n';
  str+= '[5] kembali \n';

  console.log(str);
  rl.on('line', (input) => {
      if(input === '1'){
          queryNamaJurusan();
      }else if(input === '2'){
          querySingleJurusanMenu();
      }else if(input === '3'){
          addJurusanMenu()
      }else if(input === '4'){
          delJurusanMenu()
      }else if(input === 'cls'){
          exit();
      }
  })
}

function querySingleJurusanMenu() {
    rl.question('masukan kode jurusannya ', (answer) => {
        querySingleJurusan(answer)
        rl.close();
    });   
}

function addJurusanMenu() {
  
    console.log('this');
  
    rl.question('What do you think of Node.js? ', (input1) => {
      rl.question('What do you think of Node.js? ', (answer2) => {
        AddJurusanNIM(input1, answer2);
        console.log('is this work?');
        
      })
    });
  }

function delJurusanMenu() {
    rl.question('masukan kode jurusan yang ingin di hapus   ', (input) => {
        DeleteJurusanNIM(input)
    });
}

function dosenMenu(params) {
    let str = 'silahkan piih opsi di bawah ini \n';
  str+= '[1] daftar dosen \n';
  str+= '[2] cari dosen \n';
  str+= '[3] tambah dosen \n';
  str+= '[4] hapus dosen \n';
  str+= '[5] kembali \n';

  console.log(str);
  rl.on('line', (input) => {
      if(input === '1'){
          queryNamaDosen();
      }else if(input === '2'){
          querySingleDosenMenu();
      }else if(input === '3'){
          addDosenMenu();
      }else if(input === '4'){
          delDosenMenu();
      }else{
          exit();
      }
  }) 
}

function querySingleDosenMenu() {
    rl.question('masukan kode dosen yang ingin di cari   ', (input) => {
        querySingleDosen(input);
    });
}

function addDosenMenu() {
  
    console.log('this');
  
    rl.question('What do you think of Node.js? ', (input1) => {
      rl.question('What do you think of Node.js? ', (answer2) => {
        AddDosenNIM(input1, answer2);
        console.log('is this work?');
        
      })
    });
  }

  function delDosenMenu() {
    rl.question('masukan kode jurusan yang ingin di hapus   ', (input) => {
        DeleteDosenNIM(input);
        queryNamaDosen()
        exit();
    });
}

function MataKuliahMenu() {
    let str = 'silahkan piih opsi di bawah ini \n';
  str+= '[1] daftar matakuliah \n';
  str+= '[2] cari matakuliah \n';
  str+= '[3] tambah matakuliah \n';
  str+= '[4] hapus matakuliah \n';
  str+= '[5] kembali \n';

  console.log(str);
  rl.on('line', (input) => {
      if(input === '1'){
          queryMataKuliah();
      }else if(input === '2'){
          QuerySingleMatakuliahMenu();
      }else if(input === '3'){
            AddMatakuliahMenu();
      }else if(input === '4'){
          delMatakuliahMenu()
      }else{
          exit();
      }
  })
}

function QuerySingleMatakuliahMenu() {
    rl.question('masukan kode matakuliah yang ingin dicari   ', (input) => {
        querySingleMatakuliah(input);
    });
}

function AddMatakuliahMenu() {
    rl.question('What do you think of Node.js? ', (input1) => {
        rl.question('What do you think of Node.js? ', (answer2) => {
            rl.question('What do you think of Node.js? ', (answer3) => {
                AddMatakuliahNIM(input1, answer2, answer3);
                console.log('is this work?');
                queryMataKuliah();
            });
        })
      });
}

function delMatakuliahMenu() {
    rl.question('masukan kode jurusan yang ingin di hapus   ', (input) => {
        DeleteMatakuliahNIM(input)
        queryMataKuliah();
        exit();
    });
}

function kontrakMenu() {
    let str = 'silahkan piih opsi di bawah ini \n';
  str+= '[1] daftar kontrak \n';
  str+= '[2] cari kontrak \n';
  str+= '[3] tambah kontrak \n';
  str+= '[4] hapus kontrak \n';
  str+= '[5] kembali \n';

  console.log(str);
  rl.on('line', (input) => {
      if(input === '1'){
          queryKontrak();
      }else if(input === '2'){
          querySingleKontrakMenu();
      }else if(input === '3'){
          AddKontrakMenu();
      }else if(input === '4'){
          DelKontrakMenu();
      }
  })
}

function querySingleKontrakMenu() {
    rl.question('masukan id kontrak yang ingin dicari   ', (input) => {
        querySingleKontrak(input);
        exit();
    });
}

function AddKontrakMenu(){
    rl.question('masukan data   ', (input) => {
        rl.question('masukan id kontrak yang ingin dicari   ', (answer2) => {
            rl.question('masukan id kontrak yang ingin dicari   ', (answer3) => {
                rl.question('masukan id kontrak yang ingin dicari   ', (answer4) => {
                    rl.question('masukan id kontrak yang ingin dicari   ', (answer5) => {
                        rl.question('masukan id kontrak yang ingin dicari   ', (answer6) => {
                            AddKontrakNIM(input, answer2, answer3, answer4, answer5, answer6);
                            queryKontrak();
                            exit();
                        });
                    });
                });
            });
        });
    });
        
}

function DelKontrakMenu() {
    rl.question('masukan ID yang mau di hapus   ', (input) => {
        DeleteKontrakNIM(input);
        queryKontrak();
        exit();
    });
}

function exit() {
  rl.close();
}