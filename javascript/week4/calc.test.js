// test('two plus two is four', () => {
//     expect(2 + 2).toBe(5);
// });
const { calc } = require('./calc');

const ifTrue = (str1, str2) => {
    return (str1 == str2) ? true : false;
};

describe('calc metodunu test ediyoruz', () => {
    test('sonuc obj islemSonucu adinda bir property e sahip olmali', () => {
        expect(calc(5, 2, '+')).toHaveProperty('islemSonucu');
    });

    test('2 + 2 = 4 sonucunu vermeli', () => {
        expect(calc(2, 2, '+').islemSonucu).toBe(4);
    });

    test('4 - 2 = 2 sonucunu vermeli', () => {
        expect(calc(4, 2, '-').islemSonucu).toBe(2);
    });

    test('eger hata olursa hata property si olacak', () => {
        expect(calc(5, 2, 'ü')).toHaveProperty('hata');
    });

    test('operator hatasi olacak', () => {
        const sonuc = calc(5, 2, 'ü');
        const obj = { islemSonucu: 'Hata', hata: ['Operatör hatasi'] };

        expect(sonuc).toMatchObject(obj);
    });

    test('sifira bölünmemeli', () => {
        const sonuc = calc(5, 0, '/');
        const obj = { islemSonucu: 'Hata', hata: ['Bölme isleminde ikinci sayi sifir olamaz!!'] };

        expect(sonuc).toMatchObject(obj);
    });

    test('birden fazla hata olabilir', () => {
        const hata_1 = calc(5, 0, '/');
        const hata_2 = calc('5', 0, '/');

        expect(hata_1.hata.length).toBe(1);
        expect(hata_2.hata.length).toBe(2);
    });

});


describe('ikinci test paketimiz', () => {
    test('herhangi bir test', () => {
        expect(1 == 1).toBe(true);
    });

    test('örnek method', () => {
        expect(ifTrue('aa', 'aa')).toBe(true);
    });
});
