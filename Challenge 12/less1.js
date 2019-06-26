if (!process.argv[2]) {
    console.log('Tolong sertakan');
    process.exit();
  }
  
  const fs = require('fs');
  const soal = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan : '
  });
  let count = 0;
  let wrong = 0;
  console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!');
  console.log('pertanyaan : ' + soal[count].definition);
  rl.prompt();
  
  rl.on('line', (answer) => {
    if (answer.trim().toLowerCase() == 'skip') {
       soal.push(soal[count])
       count++;
       console.log('Pertanyaan: ' + soal[count].definition);
    } 
    else 
    {
    if (answer.trim().toLowerCase() == soal[count].term.toLowerCase()) {
        console.log('Selamat Anda benar');
        count++;
    } else {
        wrong++
        console.log(`Wkwkwkwk, Anda kurang beruntung! Anda telah salah ${wrong}`);
    } 
    if (count < soal.length) {
        console.log('Pertanyaan: ' + soal[count].definition);
    } else {
        console.log('Hore Anda menang!');
        rl.close()
       }
  
      rl.prompt();
    }
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });
  