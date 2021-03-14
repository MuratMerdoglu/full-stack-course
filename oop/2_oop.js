class Araba {
    constructor(marka, modeli, yasi) {
        this.marka = marka;
        this.modeli = modeli;
        this.yasi = yasi;
        console.log('Araba const calisti')
    }
    bilgi = () => {
        return `Bu tasit bir ${this.marka} dir.`
    }
}

class Motosiklet extends Araba {
    constructor(marka, model, yasi) {
        console.log('motorsiklet const calisti')
        super(marka, model, yasi);
    }
}

var moto1 = new Motosiklet('Honda', 's3', 2015)

console.log(moto1)