function polaa(str) {
    for(var ii = 1; ii <= 9; ii++){
            for (var uu = 1; uu <= 9; uu++) {
                var aa = uu + ii ;
                if(aa === 14){
                    var def = uu.toString();
                    var def2 = ii.toString();
                    var asd = def + def2;
                    
                    return asd;
                }
                
            }
    }
}

console.log(polaa());
