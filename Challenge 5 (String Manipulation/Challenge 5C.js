function stringManipulation(word) {
    
    
    var th = 'b';

    
    // change b position to last
    // and add nyo in the last
    
    // check is the first word are include aiueo
    var str = word.charAt(0);
    // if(str.includes('a') || word.includes('i')||word.includes('u')||word.includes('e')||word.includes('0')){
    //     // var res = console.log(word);
    //     var res =console.log(word);   
    // }else {
    //     var res =word
    //     return res;
        
    // }

    if(str.includes('a') ||str.includes('i') ||str.includes('u') ||str.includes('e') ||str.includes('o')){
        var res = console.log(word);
    }
    // take first string, 
    // remove first string when out
    // put stealed string to last word
    // adding nyo
    else{
        console.log('no');
        console.log('.....');
        // substr(0,0) // concat()
        var hug = str;
        var hug1 = word.substr(1);

        console.log(hug1 + hug + 'nyo');
        
        
    }

    return res;
    
}

stringManipulation('ayam');
stringManipulation('bebek');
stringManipulation('cicak');
