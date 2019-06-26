function weirdMultiply(sentence) {
    // var arr = ['1','2','3','4','5'];

    // var rr = parseInt(arr[3]);

    // var val = 0;
    // for (var ii = 0; ii < arr.length; ii++) {
    //     val += parseInt(arr[ii]);
    
        
        
    // }
    
    // return val;



    //// /// // ///
    var vall = sentence.toString();
    var vall2 = vall.split("");
    var arr = []
    for (var ii = 0; ii < vall2.length; ii++) {
        arr.push(vall2[ii]);
        
        
    }

    if(arr.length === 0 ){
        return arr;
    }
    

    return arr;
    
}

// console.log(weirdMultiply());

// console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
// console.log(weirdMultiply(3));



// 4
// 2
// 3