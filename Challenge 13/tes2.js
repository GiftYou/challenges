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

jsonn1 = JSON.parse(fs.readFileSync("data.json", 'utf8'));

let input = process.argv;
let inputX = input[3];
let inputXT = input[4];

switch(process.argv[2]){
  case 'help':
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
  
  jsonn1[input[3] -1].status = true;

  fs.writeFileSync('data.json', JSON.stringify(jsonn1));
  console.log('forget it');
  
  process.exit(0);
  break;

  case 'uncomplete':

  jsonn1[input[3] - 1].status = false;

  fs.writeFileSync('data.json', JSON.stringify(jsonn1));
  console.log('done');
  process.exit(0);

  case 'delete':
  
  jsonn1.splice(inputX - 1, 1);
  
  fs.writeFileSync('data.json', JSON.stringify(jsonn1));

  console.log('del done!');
  process.exit(0);
  break;

  case 'tag':
  for(let ii = 4;ii < input.length; ii++){
    jsonn1[inputX - 1].tags.push(input[ii]);
    jsonn1[inputX - 1].tags.join(',');
  }
    
  fs.writeFileSync('data.json', JSON.stringify(jsonn1));
  console.log(jsonn1);
  process.exit(0)
  break;
  

  case `${input[2]}`:
  
//   input.join('')

  let filterr = input[2].split(':');

//   let strFil = '';
//   for(let uu = 1; uu < filterr.length; uu++){
//       strFil += filterr[uu];
//       console.log(strFil);
//   }


//   for(let ii = 0; ii < jsonn1.length; ii++){
//       //jika tag menangkap huruf/kata yang sama dengan input,
//       //masukan index data yang menyediakan huruf tersebut

//       if(jsonn1[ii].tags.indexOf(filterr[1]) > 0 ){
//           console.log(jsonn1[ii].data);
        
//       }
    
//   }

console.log(input[2]);

//   let arr = [2,4,8,16];
//   function doubler(x){
//       if(x === 4){
//           return 'this are four';
//       }else{
//           return x;
//       }
//   }

// arr = arr.map(doubler);
//   console.log(arr);
  
//   console.log(input);
  
  
  process.exit(0);
  break;
}