function weirdMultiply(sentence) {
    // send value number to var string
    // kirim semua nilai angka ke variable string
    var vall = sentence.toString();

    // send var string to array
    // kirim semua item variable string ke sebuah variable array
    var vall2 = vall.split("");
    var arr = []
    for (var ii = 0; ii < vall2.length; ii++) {
        arr.push(vall2[ii]);
        
        
    }

    // check apakah array lebih dari nol
    // return nilai array jika hanya ada satu item
    if(arr.length === 1 ){
        return sentence;
    }
    // jalankan perkalian jika panjang array lebih dari nol
    else{
        var val = 1;
        for (var ii = 0; ii < arr.length; ii++) {
            val *= parseInt(arr[ii]);
            
        }
        return weirdMultiply(val);
        
    }
    
    
}

// console.log(weirdMultiply());

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));



// 4
// 2
// 3