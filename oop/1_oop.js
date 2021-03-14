// var araba = {
//     rengi: 'kirmizi',
//     modeli: 'tofas',
//     calistir: function () {
//         console.log('Araba calisti');
//     }
// }


// console.log(araba.rengi);
// console.log(araba['modeli']);
// console.log(araba.calistir());

// var yeni_araba = new araba

// function -> nesne

// function Araba(marka, modeli, yasi) {
//     this.marka = marka;
//     this.modeli = modeli;
//     this.yasi = yasi;
//     this.bilgi = function () {
//         return `Bu araba bir ${this.marka} dir.`
//     }
// }

// var araba1 = new Araba('Audi', 'A3', 2015);
// var araba2 = new Araba('Tofas', 'Sahin', 1995);

// console.log(araba1);
// // araba1.objectfreeze;
// araba1.rengi = 'Kirmizi';

// araba1.calistir = function () {
//     console.log('Araba calisti')
// }

// araba1.calistir();







// class -> nesne

class Araba {
    constructor(marka, modeli, yasi) {
        this.marka = marka;
        this.modeli = modeli;
        this.yasi = yasi;
    }
    bilgi = () => {
        return `Bu araba bir ${this.marka} dir.`
    }

    method1 = () => 'Baska bir method';

}


var araba1 = new Araba('Audi', 'A3', 2015);
var araba2 = new Araba('Audi', 'A3', 2015);
var araba3 = new Araba(null, 'Sahin');

araba1.rengi = 'kirmizi';
araba1.method2 = function () {
    return 'Disaridan gelen method'
}

console.log(araba3);