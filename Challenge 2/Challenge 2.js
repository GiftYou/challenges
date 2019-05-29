function deretKaskus(n){

    // declarating empty array
    var hasil = [];

    // every n will timed with 3 with this for
    for (var i = 3; i <= n * 3; i += 3) {
        // push KASKUS String when get zero by moduled by 5 and 6
        if (i % 5 == 0 && i % 6 == 0) {
            hasil.push("KASKUS");
        } 
        // push KUS String only when get zero by moduled only by 6
        else if (i % 6 == 0) {
            hasil.push("KUS");
        } 
        // push KAS String only when get zero by moduled only by 5
        else if (i % 5 == 0) {
            hasil.push("KAS");
        }
        // just result the number who doesn't get module/programmed
        else{
            hasil.push(i);
        }
        
    }
    var res = console.log(hasil);
    
    return res;


}

console.log(deretKaskus(10));

/* [3, "KUS", 9, "KUS", "KAS", "KUS", 21, "KUS", 27, "KASKUS"] */

/** 3,   6,   9,   12,    15,    18,  21,   24,  27      ] */
