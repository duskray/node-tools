const fs = require('fs');
const zlib = require('zlib');

const encode = () => {
    fs.readFile('input.txt', 'utf8', function (err, data) {
        if (err) console.log(err);
        var buf = Buffer.from(data);
        zlib.gzip(buf, (err, result) => {
            if (err) throw err;
            var content = result.toString('base64');
            fs.writeFile('output.txt', content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    })
}

encode();
