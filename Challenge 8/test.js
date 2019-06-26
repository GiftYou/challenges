function adaa(intt) {
    var aa = intt.trim();

    
    for(var ii = 1;ii < 10; ii++){
        
        if(1 * parseInt(aa.replace('x', ii)) === 5){
            return [ii]
        }
    }

    
    

}

console.log(adaa('   x'));
