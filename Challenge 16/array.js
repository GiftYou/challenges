class Tyre{
    constructor(jumlah, merek){
        this.jumlah = jumlah;
        this.merek = merek;
    }
}

class Car{
    constructor(Ban, kursi, pintu, tahun, garansi){
        this.Ban = Ban;
        this.kursi = kursi;
        this.pintu = pintu;
        this.tahun = tahun;
        this.garansi = garansi;
    }
}

class Civic extends Car{
    constructor(tahun){
        super(new Tyre(4, 'dunlop'), 4, 4, tahun, 10);
    }
}

class CarFactory{
    constructor(){
        this.CivicList = [];
    }
    CivicProduction(tahun){

        return this.CivicList.push(new Civic())
    }
    resCivic(){
        console.log(this.CivicList);
        
    }
}

let ci = new CarFactory();

ci.CivicProduction(2015);
ci.resCivic();
