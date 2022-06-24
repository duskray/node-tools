const fs = require('fs');
const zlib = require('zlib');

const encode = () => {
    zlib.deflate('Hello World', (err, buffer) => {
        if (err) throw err;
        const toUpload = buffer.toString('base64');
        console.log(toUpload);
    });
}

const decode = () => {
    fs.readFile('data.txt', 'utf8', function (err, data) {
        if (err) console.log(err);
        var buf = Buffer.from(data, 'base64');
        zlib.unzip(buf, (err, result) => {
            if (err) throw err;
            var content = result.toString('utf8');
            fs.writeFile('result.txt', content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    });
}

decode();

