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
    setTimeout(() => {
        console.log("ilanlar listelendi");
    }, 1000);
}

login()
    .then((data2) => {
        console.log(data2);
        listele();
    })
    .catch((hata) => {
        console.log(hata);
    });
    

