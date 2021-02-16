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
    setTimeout(() => {
        console.log("ilanlar listelendi");
    }, 2000);
}

login()
    .then((data) => {
        console.log(data);
        listele();        
    })   
    .catch((hata) => {
        console.log(hata);
    });

