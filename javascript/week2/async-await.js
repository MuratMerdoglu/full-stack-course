var durum = true;
var user = { id: 1, adi: "Murat" };
// var ilanlar = { id: 1, uid: 1, ilan: "Araba" };

function login() {
    return new Promise(function (resolve, reject) {
        if (durum == true) {
            setTimeout (() => {
                resolve({ id: 1, adi: "Ahmet" });
            }, 2000);
        } else {
            reject('kullanici bilgileri bulunamadi');
        }
    });
}

function listele() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(console.log("ilanlar listelendi")); }, 2000);
    });
}

function yorumlar() {
    setTimeout(() => {
        console.log("yorumlar geldi");
    }, 1000);
}

async function islemAkisi() {
    await login()
        .then((data2) => {
            console.log(data2);
            listele()
                .then((data) => {                   
                    yorumlar();
                })
        }) 
        .catch((hata) => {
            console.log(hata);
        });
}

islemAkisi();
