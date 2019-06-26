const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  
});


// const soal = JSON.parse(fs.readFileSync('data.json', 'utf8'));

let count = 0;
let wrong = 0;

// console.log(soal[count].definition);

// function namess(flag) {
//     var index = process.argv.indexOf(flag);
//     return (flag === -1) ? null : process.argv[index+1];
// }

function namess(flag) {
  var index = process.argv.indexOf(flag);
  return (flag === -1) ? null : process.argv[index+1];
}


let readd;
let jsonn;

// readd = fs.readFileSync('data.json', 'utf8');
jsonn1 = JSON.parse(fs.readFileSync("data.json", 'utf8'));

let input = process.argv;

//array
// jsonn = JSON.parse(readd)

switch(process.argv[2]){
  case undefined:
  console.log('--- JS TODO ---');

  console.log('$ node less.js add');
  console.log('$ node less.js list');
  console.log('$ node less.js delete');
  console.log('$ node less.js complete');
  console.log('$ node less.js uncomplete');
  console.log('$ node less.js list:outstanding asc');
  console.log('$ node less.js list:complete desc');
  console.log('$ node less.js filter:masak');
  process.exit(0);
  break;
  case 'list':
  let arr = []
  for(let ii = 0; ii < jsonn1.length; ii++){
    // arr.push(jsonn1[ii]['data']);
    let data = jsonn1[ii]['data']
    let status = jsonn1[ii]['status']
    
    if(status === false){
        let ar = '[ ]';
        console.log(ar + data);
    }else{
        let ar = '[X]';
        console.log(ar + data);
    }
    
    
  }
//   console.log(JSON.stringify(jsonn1[0]['data'])); 
  
  
  process.exit(0);
  break;
  case 'add':
  let str = '';
  for(let ii = 3; ii < input.length; ii++){
      str += input[ii] + ' ';
  }
  jsonn1.push(
      {
          'data': str,
          'status': false,
          'tags': []
      }
  )
  fs.writeFileSync('data.json', JSON.stringify(jsonn1));
  
  console.log('done');
  process.exit(0);
  break;
  
  case 'complete':
  // taking index for updating
  let index = input[3]
//   let changeStatus = jsonn1[index - 1]['status'];

//   fs.writeFileSync('data.json', )
  // lokasi index yang harus di ubah
  // let arrCom = jsonn1[index -1]
  // let indexx = arrCom;

  // indexx.splice(1, 1, false);
  jsonn1[index -1].status = true;
  // let rra = arraryy.splice(2,1, false);
  // indexx.status.splice(0,1, false);

  fs.writeFileSync('data.json', JSON.stringify(jsonn1));
  console.log('forget it');
  
  process.exit(0);
  break;

  case 'uncomplete':
  let indexUn = input[3];

  jsonn1[indexUn - 1].status = false;

  fs.writeFileSync('data.json', JSON.stringify(jsonn1));
  console.log('done');
  process.exit(0);

  case 'delete':
  

}