
function indexPrime(param) {

    // function for check is the input are prime number
    function checkPrime(n) {

        // if input less than 2, the false
        if(n <2 ){
            return false;
        }

        // ii run from 2, while ii less then input
        for(var ii = 2; ii < n; ii++){

            // if input moduled by input are zero, then false
            // if ini untuk check apakah parameter n diatas itu bisa di bagi angka selain dia
            if(n%ii== 0){
                return false;
            }
        }
    
        
        // ketika ga masuk ke if di atas

        return true;
    }
    let hitung = 0;
    let angka = 2;

    while(hitung< param){
        if(checkPrime(angka)){
            hitung++;
        }
        angka++
    }
    return angka-1;


}
console.log();
console.log(indexPrime(500));
