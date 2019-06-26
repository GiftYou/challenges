function romawi(n) {

    // make multidimensional array of number with roman couple
    var code = [
        [1000, "M"], [900, "CM"], [800, "DCCC"], [700, "DCC"], [600, "DC"],
        [500, "D"], [400, "CD"], [300, "CCC"], [200, "CC"], 
        [100, "C"], [90, "XC"], [80, "LXXX"], [70, "LXX"], [60, "LX"], 
        [50, "L"], [40, "XL"], [30, "XXX"], [20, "XX"], 
        [10, "X"], [9, "IX"], [8, "VIII"], [7, "VII"], [6, "VI"], 
        [5, "V"], [4, "IV"], [3, "III"], [2, "II"], [1, "I"],
      ];
    
      // make empty string for the output
      var rom = "";

      // while i under than length of code
      // keep the looping
      for(var i=0; i<code.length; i++) {
        // while n/input more than 
        while(n >= code[i][0]) {
          rom += code[i][1];
          n -= code[i][0];
        }
      }
      return rom;

}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MCDXLVI  | ", romawi(1646));