function pola(str) {
    // array
    var arr = str.split(" ");

    // 42#3
    var guess1 = arr[0].split("");
    // 80#204
    var guess2 = arr[4].split("");
    var hint = parseInt(arr[2]);
    
    // var myRe = /#/g;
    // var myRe2 = /#/g;
    // var guess1Arr = myRe.exec(guess1);
    // var guess2Arr =  myRe2.exec(guess2);
    // var guess2val = guess2Arr['index'];

    // for(var ii = 0; ii < guess1.length; ii++){
    //     while
    // }
    
    var val = 0
    while( val < guess1.length){
        if(guess1[val] === '#'){
            return val;
        }
        val++;
    }
    

    // 80#204

    

    // ambil item yang include tanda "#"

}

console.log(pola("42#3 * 188 = 80#204"));
// [8,5]
// console.log(pola("8#61 * 895 = 78410#5"));
// [7,9]