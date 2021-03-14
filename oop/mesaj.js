class Bildirim {
    gonder = (gelenClass) => {
        gelenClass.gonder();
        console.log('Bildirim yapildi');
        console.log('----------------------');
        console.log('');
    }
}

// Interface (Java, C#) (Aslinda Abstract class)
class Mesaj {
    constructor(mesaj) {
        this.mesaj = mesaj;
    }
    gonder = () => {
        console.log('')
        console.log('----------------------');
        console.log(`Bu mesaj bir ${this.mesaj} dir.`);
    }
}

class EpostaBildirim extends Mesaj {
    constructor(gelenMesaj) {
        super(gelenMesaj);
    }
}

class SmsBildirm extends Mesaj {
    constructor(gelenMesaj) {
        super(gelenMesaj);
    }
}


class FaxBildirim extends Mesaj {
    constructor(gelenMesaj) {
        super(gelenMesaj);
    }
}

const buttonClicked = () => {
    var bildirim = new Bildirim();
    bildirim.gonder(new EpostaBildirim('Email mesaji'))
    // bildirim.gonder(new SmsBildirm('SMS mesaji'))
    // bildirim.gonder(new FaxBildirim('Fax mesaji'));
}

buttonClicked();



// SOLID 
// Dependency Inversion

// sirket politikasi degisti ve SMS gonderme karari aldi.


