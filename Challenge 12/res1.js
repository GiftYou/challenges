const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  
});
if(!process.argv[2]){
  console.log(`'Tolong sertakan nama file sebagai inputan soalnya \n Misalnya'node solution.js data.json '`);
  
  process.exit(1);
}

const soal = JSON.parse(fs.readFileSync('data.json', 'utf8'));

let count = 0;
let wrong = 0;

console.log(soal[count].definition);

rl.on('line', (answer) => {
  if(answer.trim().toLocaleLowerCase() === 'skip'){
    soal.push(soal[count]);
    count++;
    console.log(soal[count].definition);
    
  }
  else{
    if(answer.trim().toLocaleLowerCase() !== soal[count].term){
      wrong++
      console.log("salah  " + wrong);
      
    }

    else{
      if (answer.trim().toLowerCase() == soal[count].term.toLowerCase()) {
        console.log('benar..!');
        count++;
    } 
    
    else {
        wrong++
        console.log(`Wkwkwkwk, Anda kurang beruntung! Anda telah salah ${wrong}`);
    }

    if (count < soal.length) {
        console.log('Pertanyaan: ' + soal[count].definition);
    }
    
    else {
        console.log('kamu menang..!');
        rl.close()
       }
  
      rl.prompt();
      
    }

    rl.prompt();
  }

  

  // if(answer.toLocaleLowerCase() !== soal[0].term){
  //   console.log('salah');
  //   count++
  // }else{
  //   console.log(count);
    
  // }
  
  // if(soal.toLowerCase() === soal[count].definition){
  //   console.log('benar');
  // }

  
  
  
  
  
}).on('close', () => {
  
  process.exit(0);
});
