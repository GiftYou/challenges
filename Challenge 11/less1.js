const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const soal = JSON.parse(fs.readFileSync('pack.json', 'utf8'));
const question1 = soal[0].definition;
// const question2 = soal[1].definition;

rl.question(`${question1}`, (answer) => {
  // TODO: Log the answer in a database
    
    
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.resume();
});



rl.question(`a`,(answer) => {
    console.log((`Thank you for your valuable feedback: ${answer}`));
    
});