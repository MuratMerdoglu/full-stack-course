var durum = true;
var user = { id: 1, adi: "Murat" };

function login() {
    return new Promise(function (resolve, reject) {
        if (durum == true) {
            setTimeout(() => {
                resolve(console.log({ id: 1, adi: "Ahmet" }));
            }, 3000);
        } else {
            reject('kullanici bilgileri bulunamadi');
        }
    });
}

function listele() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(console.log("ilanlar listelendi"));
        }, 2000);
    })
}

function yorumlar() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(console.log("yorumlar geldi")); }, 500);
    })
}

async function islemAkisi() {
    await login();
    await listele();
    yorumlar();
}

islemAkisi();