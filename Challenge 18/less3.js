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
  db.run(`INSERT INTO mahasiswa (nim, nama_mahasiswa, alamat, kode_jurusan, umur, kode_mk, nip) VALUES(${nim}, ${nama_mahasiswa}, ${alamat}, ${kode_jurusan}, ${umur}, ${kode_mk}, ${nip});`);
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

  function queryKontrak(params) {
    let sql = `SELECT * FROM kontrak`;
   
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
  });
  // close the database connection
  }


let account = ['rubi', 'rubipass']
let counr = 0;


console.log('login');
console.log('');
rl.on('line', (input) => {
  if(counr === 2){
    
  }else{
    if(input === account[counr]){
      console.log('');
      console.log('pass');
        ++counr
        if(counr === account.length){
          ques();
        }else if (input === 9){
          exit();
        }
    }else{
        console.log(`account salah~~`);
        rl.close();
    }
  }
    
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
    else if(input === 'cls'){
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
    }else if(inputM === '5'){
        ques();
    }else if(inputM === 'cls'){
        rl.close();
    }
  });
}

function addMahasiswaMenu(params) {
  
  console.log('this');
  
  // rl.on('line', (input) => {
  //   rl.on('line', (input1) => {
  //     rl.on('line', (input2) => {
  //       rl.on('line', (input3) => {
  //         rl.on('line', (input4) => {
  //           rl.on('line', (input5) => {
  //             rl.on('line', (input6) => {
  //               AddMahasiswaNIM(input, input1, input2, input3, input4, input5, input6);
  //               console.log('hope this work');
  //             })
  //           })
  //         })
  //       })
        
  //     })
  //   });
  // });

  rl.question('What do you think of Node.js? ', (input1) => {
    rl.question('What do you think of Node.js? ', (answer2) => {
      rl.question('What do you think of Node.js? ', (answer3) => {
        rl.question('What do you think of Node.js? ', (answer4) => {
          rl.question('What do you think of Node.js? ', (answer5) => {
            rl.question('What do you think of Node.js? ', (answer6) => {
              rl.question('What do you think of Node.js? ', (answer7) => {
                AddMahasiswaNIM(input1, answer2, answer3, answer4, answer5, answer6, answer7);
                console.log('hope this work');
              })
            })
          })
        })
      })
    })
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
      }
  })
  
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
      }
  })
  
}

function MataKuliahMenu(params) {
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
      }
  })
}

function kontrakMenu(params) {
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
      }
  })
}

function exit(params) {
  rl.close();
}