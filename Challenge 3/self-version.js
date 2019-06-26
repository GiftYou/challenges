function converstToRoman(num) {
    var romanToNum = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    var roman = "";

    for (var ii = 0; ii < romanToNum.length; ii++) {
        while (num >= romanToNum[ii][1]) {
            roman += romanToNum[ii][0];
            num -= romanToNum[ii][1];
            
        }
        
    }

    return roman;
    
}

console.log(converstToRoman(13));