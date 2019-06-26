function sentencesManipulation(sentence) {
    // var res = sentence;

    
    var ibu = sentence.substr(0, 4);
    var pergi = sentence.substr(5,4);
    var pergix = sentence.substr(4,3).charAt(0);
    var ke = sentence.substr(11,1);
    var kex = sentence.substr(10,1);
    var pasar = sentence.substr(14, 4);
    var pasarx = sentence.substr(13, 5).charAt(0);
    var bersama = sentence.substr(20,6);
    var bersamax = sentence.substr(19,7).charAt(0);
    var aku = sentence.substr(27,3);
    console.log(ibu + pergi +pergix +'nyo '
        + ke + kex + 'nyo ' +
        pasar + pasarx +'nyo ' +
        bersama + bersamax + 'nyo ' + aku
    );
    

    
    
}

sentencesManipulation('ibu pergi ke pasar bersama aku');