'use strict'

const readline = require('readline')
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const file = 'package.json';

// Check if the file exists in the current directory.
fs.access(file, fs.constants.F_wOK, (err) => {
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
  });

const soal = JSON.parse(fs.readFileSync('pack.json', 'utf8'));


const question1 = () => {
  return new Promise((resolve, reject) => {
    
    console.log(process.argv);
    
    
  });
}



const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()