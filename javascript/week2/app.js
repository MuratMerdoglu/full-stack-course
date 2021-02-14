// String 
var str = "string deger";
var num = 12.435;

str = "yeni";

//boolean // true veya false
var veriGeldiMi = true;
var kontrol = false;

// object degiskenleri
// eslint => kod yazim standartlari - airbnb eslint

var araba = {
    marka: "Audi",
    model: "A3",
    yasi: 8,
    kazaliMi: false,
    calistir: function () {
        console.log('araba calisiyor');
    },
    koltuk: {
        renk: "kirmizi",
        adet: 4
    }
}

// araba.kazaliMi = true;

console.log(araba.marka);