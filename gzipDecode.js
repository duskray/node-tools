const fs = require('fs');
const zlib = require('zlib');

const decode = () => {
    fs.readFile('input.txt', 'utf8', function (err, data) {
        if (err) console.log(err);
        var buf = Buffer.from(data, 'base64');
        zlib.unzip(buf, (err, result) => {
            if (err) throw err;
            var content = result.toString('utf8');
            fs.writeFile('output.txt', content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    });
}

decode();

