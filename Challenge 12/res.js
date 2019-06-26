'use strict'

const readline = require('readline')
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const soal = JSON.parse(fs.readFileSync('pack.json', 'utf8'));

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`${soal[0].definition} `, (answer) => {
        if(answer === soal[0].term){
            console.log('Anda benar !');
            
        }else{
            console.log('Wkwkwk, Anda kurang beruntung !');
            
        }
      
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`${soal[1].definition} `, (answer) => {
        if(answer === soal[1].term){
            console.log('Anda benar !');
        }else{
            console.log('Wkwkwk, Anda kurang beruntung');
            
        }
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()