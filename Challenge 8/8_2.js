function pola(str){
    // array
    var arr = str.split(" ");

    // 42#3
    var guess1_1 = arr[0].split("");
    // 80#204
    var guess2 = arr[4].split("");
    // key
    var hint = parseInt(arr[2]);

    var res = guess1_1.indexOf('#');
    var res2 = guess2.indexOf('#');
    

    for (let ii = 1; ii <= 9; ii++) {
        for (let uu = 1; uu <= 9;uu++) {
            guess1_1.splice(res, 1, uu);
            guess2.splice(res2, 1, ii);
            
            var guess1_1String = guess1_1.join("");
            var guess2String = guess2.join("");
            var guess1_1Number = parseInt(guess1_1String);
            var guess2Number = parseInt(guess2String);

            var res = guess1_1Number  * hint;
            if(res === 805204){
                return uu;
            }
            
            
            // coba looping item index '#'

            // 
        }
            
    }
    
}


console.log(pola("42#3 * 188 = 80#204"));
// [8,5]
// console.log(pola("8#61 * 895 = 78410#5"));
// [7,9]

// 792044