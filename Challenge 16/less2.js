class Car{
    constructor(Tyre, kursi, pintu, garansi, tahun){
        this.Tyre = Tyre;
        this.kursi = kursi;
        this.pintu = pintu;
        this.garansi = garansi;
        this.tahun = tahun;
    }
}

class Tyre{

}

class Mitsubishi extends Car{
    constructor(){
        super(new Tyre(), 4, 4, 10, 2015);
    }
}

class CarFactory{
    
    constructor(){
        this.MitsubishiList = [];
    }

    Mitsubishi(){
        this.MitsubishiList.push(new Mitsubishi);
    }
    carProduced(){
        console.log(this.MitsubishiList);
    }

    //'static' untuk membuat getRandomInt() bisa di pakai di dalam Mitsubishi()
    static getRandomInt(){
        
    }
    
}

let MitsubishiObj = new CarFactory();

//' MitsubishiObj.Mitsubishi(); ' untuk bisa memanggil this.MitsubishiList
MitsubishiObj.Mitsubishi();
MitsubishiObj.carProduced();


// console.log(MitsubishiObj);

