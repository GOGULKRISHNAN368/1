const fs = require('fs');
const code = fs.readFileSync('assets/icons.ofWx6Oua.js', 'utf8');

const expIdx = code.lastIndexOf('export{');
console.log(code.slice(expIdx));
