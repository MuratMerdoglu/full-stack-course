
// function func1() {
//     // yapilacak islemler
//     // yapilacak islemler
//     // yapilacak islemler
//     // yapilacak islemler
//     console.log('func1 calisti, bir deger dondurmedi.');
// }
// func1();

// function func2(param1, param2 = ) {
//     console.log(param1 + param2);
// }
// func2(3, 6);

// function login(user = { userName: 'guest' }) {
//     console.log('Hosgeldiniz: ' + user.userName);
// }

// login();

// function topla(num1, num2) {
//     var sonuc = num1 + num2;
//     return sonuc;
// }

function topla(num1, num2) {
    var sonuc = {
        islemSonucu: num1 + num2,
        durum: 'basarili'
    }
    return sonuc;
}

var res = topla(3, 6);
console.log(res);

