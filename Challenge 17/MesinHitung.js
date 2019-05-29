export default class MesinHitung{

    constructor(){
        this.x = 10; // 10 MERUPAKAN ANGKA RANDOM
    
    }

    add(angka){
        this.x += angka;
        return this;

    }
    substract(angka){
        this.x -= angka;
        return this;

     }
    divide(angka){
         this.x /= angka;
        return this;

    }
    multiply(angka){
        this.x *= angka; 
        return this;
    }
    square(){
        this.x = Math.pow(this.x,10); //10 merupakan angka random
        return this;

    }
    exponent(angka){
        this.x = Math.pow(this.x, angka);
        return this;
    }
    squareRoot() {
        this.x = Math.sqrt(this.x);
        return this;
    }
    result(){
        console.log(this.x);
        return this;
    }
}
