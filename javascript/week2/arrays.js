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
var arr = ["murat", "ahmet", "mehmet"];
var arr2 = ["murat", 12.3, false, araba, [1, 2, 3]];

// arr2.forEach(x => console.log(x));

// for (let index = 0; index < arr2.length; index++) {
//     console.log(arr2[index])
// }


// console.log(arr2);
// console.log(arr2[4][1]);
// console.log("array icindeki eleman sayisi: " + arr.length);