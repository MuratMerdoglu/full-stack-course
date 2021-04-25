const fs = require('fs');
const file = 'video.mp4';

const readStream = fs.createReadStream(file);

fs.stat(file, (err, data) => {
    let i = 0;
    readStream.on('data', (chunk) => {
        i++;
        // chunk alip siyah beyaza cevir islemleri.
        console.log(i, '---', chunk.length)
    })
})