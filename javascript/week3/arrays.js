
// const sayilar = [10, 15, 6, 61, 56, 44, 81, 120, 2, 56, 78];
const students = [
    { id: 1, adi: 'Murat', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 21, baslamaTarihi: 2010, bitirmeTarihi: 2014 },
    { id: 2, adi: 'Ahmet', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 32, baslamaTarihi: 2000, bitirmeTarihi: 2006 },
    { id: 3, adi: 'Mahmut', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 13, baslamaTarihi: 1999, bitirmeTarihi: 2008 },
    { id: 4, adi: 'Senem', cinsiyeti: 'k', bolum: 'mühendislik', yasi: 45, baslamaTarihi: 1993, bitirmeTarihi: 1997 },
    { id: 5, adi: 'Osman', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 61, baslamaTarihi: 1980, bitirmeTarihi: 1988 },
    { id: 6, adi: 'Emine', cinsiyeti: 'k', bolum: 'iibf', yasi: 17, baslamaTarihi: 2017, bitirmeTarihi: 2021 },
];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].adi);
// }

// forEach
// students.forEach(student => {
//     console.log(student.adi);
// });

let sonuc = null;

// array.find

// sonuc = students.find(item => item.adi == 'Ahmet');
// console.table(sonuc);

// array.findIndex

// sonuc = students.findIndex(item => {
//     return item.id == 5
// });


// array.filter

// sonuc = students.filter(item => (item.cinsiyeti == 'e' && item.bolum == 'mimarlik' && item.yasi > 18));


// array.map
// sonuc = students.map(item => {
//     return {
//         // id: item.id,
//         // adi: item.adi,
//         // cinsiyeti: item.cinsiyeti,
//         ...item,
//         ortalama: item.bitirmeTarihi - item.baslamaTarihi
//     }
// });

// array.reduce
// console.log(sayilar)
// sonuc = sayilar.reduce((toplam, item) => toplam = toplam + item);
// sonuc = students.reduce((toplam, item) => {
//     return toplam = toplam + (item.bitirmeTarihi - item.baslamaTarihi), 0
// });


// array.some

// sonuc = students.some(item => item.cinsiyeti == 'k');



// array.every

// sonuc = students.every(item => item.cinsiyeti == 'k');

// array.sort

// sonuc = sayilar.sort((a, b) => b - a);


// array.flat

// const sayilar = [10, [12, 'abc', ['qwwq', 889]], 6, 61, 56, 44, 81, 120, 2, 56, 78];

// sonuc = sayilar.flat(Infinity);











console.log(sonuc);





