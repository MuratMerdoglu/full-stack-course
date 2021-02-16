var durum = true;
var user = { id: 1, adi: "Murat" };
// var ilanlar = { id: 1, uid: 1, ilan: "Araba" };

function login() {
    return new Promise(function (resolve, reject) {
        if (durum == true) {
            resolve({ id: 1, adi: "Ahmet" });
        } else {
            reject('kullanici bilgileri bulunamadi');
        }
    });
}

function listele() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(console.log("ilanlar listelendi"));
        }, 1000);
    })
}

function yorumlar() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(console.log("yorumlar geldi")); }, 500);
    })
}

async function islemAkisi() {
    await login()
        .then((data) => {
            console.log(data);
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