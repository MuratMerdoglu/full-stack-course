// API -- application program interface

// JSON veya XML 

// JSON = Javascript Object Notation


// const json = {
//     "adi": "Mahmut",
//     "yasi": 25,
//     "evliMi": true
// }

/* json icerisinde veriler nasil saklanir
    String
    Number
    Array
    Obj
    Boolean
*/


/* CRUD
    islem       api     sql
    + Create  -- post     insert into
    + Read    -- get      select
    + Update  -- put      update
    + Delete  -- delete   delete


    sql
*/


// fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(response => response.json())
//     .then(json => console.log(json))


// const users = axios.get('https://jsonplaceholder.typicode.com/users/');

// users.then(response => console.log(response));


// const yeniKayit = axios.post('https://jsonplaceholder.typicode.com/todos/',
//     {
//         "userId": 10,
//         "title": "yeni todo",
//         "completed": true
//     }
// );

// yeniKayit.then(response => console.log(response));

// console.log(yeniKayit)


// const kayitDegistir = axios.put('https://jsonplaceholder.typicode.com/todos/1',
//     {
//         "userId": 4,
//         "title": "degistirildi",
//         "completed": true
//     }
// );

// kayitDegistir.then(response => console.log(response));


// const kayitSil = axios.delete('https://jsonplaceholder.typicode.com/todos/1');

// kayitSil.then(response => console.log(response));


const kayitKismenDegistir = axios.patch('https://jsonplaceholder.typicode.com/todos/1',
    {
        "title": "kismen degistirildi",
    }
);

kayitKismenDegistir.then(response => console.log(response));



