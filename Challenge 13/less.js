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

readd = fs.readFileSync('data.json');
jsonn = JSON.parse(readd)

// var user = namess('user');
// if(user === 'myu'){
//     console.log(`hai   ${user} `);
// }else{
//     console.log(`you are not myu...!!`);
// }

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
  break;
  case 'list':
  // console.log(JSON.stringify(jsonn[0]['data']));  
  
  
  break;
  case 'add':
  //array
  
  
  
  
  // let item = namess('add');
  // let arr = 
  //   {data: item}
  // // let inputt = jsonn.push(arr);
  // jsonn.push(arr);
  fs.writeFileSync('data.json', jsonn[0] , {flag:'a'});
  // console.log(jsonn[0]);
  console.log('done');
  
  break;
  
  case 'delete':
}
  
  
// }

// console.log(`hai ${namess('add')}`);

// }




// fs.writeFileSync(pathh, writee);



// rl.on('line', (answer) => {
//     var user = namess('--user');
//     console.log('hai  '+ user);
    
//     rl.prompt();
// }).on('close', () => {
  
//   process.exit(0);
// });
