'use strict'

const readline = require('readline')
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.resume();
if(!process.argv[2]){
    console.log(`'Tolong sertakan nama file sebagai inputan soalnya \n Misalnya'node solution.js data.json '`);
    
    process.exit(1);
}

const soal = JSON.parse(fs.readFileSync('data.json', 'utf8'));


rl.question(`${soal[0].definition} `, (answer) => {
    
    
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    
});

