var i = 10;
var i = "murat";
var i = true;

// let const 
// var -> let oldu.

// let a = 10;
// a = "murat";

// let degisken_1 = 20;
// const degisken_2 = 20;

// degisken_1 = 30;
// degisken_2 = 40;

// const login = function () {
//     console.log('merhaba');
// }

// login()

// const topla = (num1, num2 = 0) => {
//     return num1 + num2
// }

// const topla = (num1, num2 = 0) => num1 + num2;

// const sonuc = topla(3, 5);
// console.log(sonuc);

// function topla(sayi1, sayi2) {
//     return sayi1 + sayi2;
// }

// const topla = (sayi1, sayi2) => sayi1 + sayi2;

// console.log(topla(23, 12));

// template literals

// const adi = 'Mahmut';
// const soyadi = 'Kilic';

// // console.log('Merhaba. adim :' + adi + ' soyadim : ' + soyadi);
// // back tick
// console.log(`Merhaba adim ${adi} soyadim ${soyadi}`);


// const obj = {
//     adi: 'Mahmut',
//     soyadi: 'kilic'
// }

// // let name = obj.adi;
// // let surName = obj.soyadi;

// const { adi: name, soyadi } = obj;

// console.log(name)




// spread operator.     ...

// const arr = ['abc', 'def', 'ghi'];

// console.log(arr);
// console.log(...arr);

// const arr = ['abc', 'def', 'ghi'];
// // const arr2 = [...arr, 12, 'wer'];
// // const arr2 = ['xyz', ...rest] = arr

// console.log(arr)
// console.log(arr2)


const func = (...arg) => {
    console.log(arg[1]);
}

func(12, 'xxx', ['asd']);
