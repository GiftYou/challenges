class Tyre {
    constructor(merek, jumlah) {
        this.merek = merek;
        this.jumlah = jumlah;
    }
}

class Car {
    constructor(kursi, pintu, garansi, tahun, tipe, Tyre) {
        this.kursi = kursi;
        this.pintu = pintu;
        this.garansi = garansi;
        this.tahun = tahun;
        this.tipe = tipe;
        this.Tyre = Tyre;
    }
    expireGaransi(currentYears) {

        if (currentYears - this.garansi <= this.tahun) {
            console.log('garansi masih berlaku')
        } else {
            console.log('garansi habis')
        }
    }
}

class pajero extends Car {
    constructor(tahun){
        (super(7, 4, 10, tahun, 'pajero', new Tyre('swallow', 4)))
    }
    
}

class fortuner extends Car {
    constructor(tahun){
        (super(7, ))
    }
}

class CarFactory {

    get Call() {
        return this.rand();
    }
    rand() {
        return Math.random();
    }

}class Tyre {
    constructor(merek, jumlah) {
        this.merek = merek;
        this.jumlah = jumlah;
    }
}

class Car {
    constructor(kursi, pintu, garansi, tahun, tipe, Tyre) {
        this.kursi = kursi;
        this.pintu = pintu;
        this.garansi = garansi;
        this.tahun = tahun;
        this.tipe = tipe;
        this.Tyre = Tyre;
    }
    expireGaransi(currentYears) {

        if (currentYears - this.garansi <= this.tahun) {
            console.log('garansi masih berlaku')
        } else {
            console.log('garansi habis')
        }
    }
}

class pajero extends Car {
    constructor(tahun){
        (super(7, 4, 10, tahun, 'pajero', new Tyre('swallow', 4)))
    }
    
}

class fortuner extends Car {
    constructor(tahun){
        (super(7, ))
    }
}

class CarFactory {

    get Call() {
        return this.rand();
    }
    rand() {
        return Math.random();
    }

}
