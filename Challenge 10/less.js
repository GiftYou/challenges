const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('show what text in your brain   ', (answer) => {
  function stringManipulation(word) {
    var benar = word.charAt(0);


    if (benar.includes('a') || benar.includes('i') || benar.includes('u') || benar.includes('e') || benar.includes('o')) {
        return word;
    } else {
        var salah = benar;
        var salah1 = word.substr(1);
        return salah1 + salah + 'nyo';
    }
}

function sentencesManipulation(answer) {
    var sams = answer.split(' ');
    var hasil = []
    for (var i = 0; i < sams.length; i++) {
        hasil.push(stringManipulation(sams[i]));
    }

    return hasil.join(' ');
}
    console.log(`and i guess that was : ${sentencesManipulation(answer)}`);
    
    rl.close();
});