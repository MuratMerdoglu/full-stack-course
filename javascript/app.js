// console.log('Merhaba dünya');

// var data = 12;
// var mesaj = "Hosgeldiniz";

// data = "yeni string deger";

// mesaj = 123;

// console.log("mesaj " + mesaj);
// console.log("data " + data);



// var str = "1";
// var num = 2;
// console.log(str + str);


// var fetchUserNameFromService = "Murat";
// camel case yazim kurali



/* aritmatik operatorler
*/

// var sayi = 10;


// karsilastirma operatörleri

/*
 == esit ise
 === veri tipi dahil esit ise
 != esit degil ise
 !== veri tipi dahil esit degil ise
 > büyüktür
 < kücüktür
 >= büyük esit
 <= kücük esit
*/

// mantiksal karsilastirma operatorleri
/*
    && ve
    || veya
*/

// var num1 = 1,
//     num2 = 2,
//     num3 = 3,
//     str = "Murat";

// console.log((num1 == 1 && num2 == 2) || num3 == 4);


// Döngüler
// for döngüsü

// for (var i = 1; i <= 10; i++) {
//     console.log("Sayimizin degeri= " + i);
// }



// while dongüsü
// var i = 1, name = "Murat";

// while (i < 20) {
//     console.log("Sayimizin degeri= " + i);
//     i++;
// }

// do while döngüsü
// var i = 5;

// do {
//     console.log("Sayimizin degeri = " + i);
//     i++;
// } while (i < 3);


// if else conditions

// var str = "Hava güzel mi";

// if (str == "Hava güzel mi???") {
//     console.log("O zaman disari cik");
// } else {
//     console.log("Evinde otur. Yemek yap.");
// }

// fonksiyonlar

var num1 = 5, num2 = 10;

function topla(sayi_1, sayi_2) {
    return sayi_1 + sayi_2;
    // console.log("Toplam = " + (sayi_1 + sayi_2));
}

// topla(32, 5);

function cikar(sayi_1, sayi_2) {
    sayi_1 = sayi_1 + 2;
    sayi_2 = sayi_2 + 5;

    return sayi_1 - sayi_2;
    // console.log("Sonuc = " + (sayi_1 - sayi_2));
}

// cikar(7, 4);



console.log("Sonuc : " + (topla(7, 3) * cikar(4, 2)));
