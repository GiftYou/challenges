class CarFactory{

    // get Call(){
    //     return rand();
    // }
    get Call(){
        return this.rand();
    }
    rand(){
        return Math.random();
    }
      
}

class Car{
    constructor(kursi, pintu, garansi,  tahun, tipe, Tyre){
        this.kursi = kursi;
        this.pintu = pintu;
        this.garansi = garansi;
        this.tahun = tahun;
        this.tipe = tipe;
        this.Tyre = Tyre;
    }

    expireGaransi(tahun){
        
    }

}

class Tyre{
    constructor(merek, kualitas){
        this.merek = merek;
        this.kualitas = kualitas;
    }
}

const u = process.argv[2];
const uu = process.argv[3];
let ii = new Car();
let ii2 = new CarFactory();
console.log( ii.Call );


// CarFactory untuk mengolah garansi setiap merek mobil 