const express = require('express');

let app = express();

app.listen(3000, console.log('backendimiz 3000 portunda calisiyor'));

const students = [
    { id: 1, adi: 'Murat', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 21, baslamaTarihi: 2010, bitirmeTarihi: 2014 },
    { id: 2, adi: 'Ahmet', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 32, baslamaTarihi: 2000, bitirmeTarihi: 2006 },
    { id: 3, adi: 'Mahmut', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 13, baslamaTarihi: 1999, bitirmeTarihi: 2008 },
    { id: 4, adi: 'Senem', cinsiyeti: 'k', bolum: 'mühendislik', yasi: 45, baslamaTarihi: 1993, bitirmeTarihi: 1997 },
    { id: 5, adi: 'Osman', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 61, baslamaTarihi: 1980, bitirmeTarihi: 1988 },
    { id: 6, adi: 'Emine', cinsiyeti: 'k', bolum: 'iibf', yasi: 17, baslamaTarihi: 2017, bitirmeTarihi: 2021 },
];

app.get('/', (req, res) => {
    return res.send({ mesaj: 'GET istegine cevap verildi' })
});


app.post('/', (req, res) => {
    return res.send({ mesaj: 'POST istegine cevap verildi' })
});

app.put('/', (req, res) => {
    return res.send({ mesaj: 'PUT istegine cevap verildi' })
});

app.delete('/', (req, res) => {
    return res.send({ mesaj: 'DELETE istegine cevap verildi' })
});


app.get('/students', (req, res) => {
    return res.send({
        mesaj: 'GET istegine cevap verildi',
        data: students
    });
})

app.get('/students/:id', (req, res) => {
    const result = students.find(item => item.id = req.params.id)
    // console.log(_id)
    return res.send({
        mesaj: 'GET istegine cevap verildi',
        data: result
    });
})

