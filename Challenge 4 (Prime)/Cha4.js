function indexPrime(num) {

    var number = 2;
     // As prime number start from 2
    while (number< 40){ //
        var count = 0;
        for(var i =0; i<= number;i++){
            if(number%i==0){
                count++;
                
            }
        }
        if(count< 3){
            
            console.log(number);
            
        }
        number = number+1;
    }
    
}

console.log(indexPrime(4));
// console.log(indexPrime(500));
// console.log(indexPrime(37786));
