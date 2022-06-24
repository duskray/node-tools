const opentype = require('opentype.js');
const fs = require('fs');

const font = opentype.loadSync('SimSun.ttf')
const ab = font.toArrayBuffer();
fs.appendFileSync('result.opentype', Buffer.from(ab));



