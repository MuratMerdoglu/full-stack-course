const fs = require('fs');

// fs.readFile('./io/demo.txt', (err, data) => {
//     if (err)
//         console.log(err);

//     console.log(data.toString());
// });


const yazilacakData = '\nyazilacak veri_::;;';


fs.appendFile('./demo_2.txt', yazilacakData, (err) => {
    if (err)
        console.log(err);

    console.log('dosya olusturuldu');
});