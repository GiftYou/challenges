function stringManipulation(word) {
    var str = word.charAt(0);

    if(str.includes('a') ||str.includes('i') ||str.includes('u') ||str.includes('e') ||str.includes('o')){
        console.log(word);
    }else{
        var hug = str;
        var hug1 = word.substr(1);
        var res = hug1 + hug + 'nyo';
        var ret = console.log(res);
        return ret;
    }

    
}

stringManipulation('ayam');
stringManipulation('bebek');