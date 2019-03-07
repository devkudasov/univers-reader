const fs = require('fs');
const path = require('path');
const unzip = require('unzip-stream');

const outputDirName = path.join(__dirname, 'output', 'test');

fs.createReadStream(path.join(__dirname, 'test.epub'))
    .pipe(unzip.Extract({ path: 'output/test' }));