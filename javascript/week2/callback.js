loginOl(listele);

function loginOl(ikinciIslem) {
    setTimeout(function () {
        console.log('login basarili');
        ikinciIslem();
    }, 2000);
}

function listele() {
    setTimeout(() => {
        console.log('ilanlar listelendi');
    }, 500);
}
