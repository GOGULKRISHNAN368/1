const fs = require('fs');
const js = fs.readFileSync('assets/icons.ofWx6Oua.js', 'utf8');

const regex = /d:"([^"]+)"/g;
let match;
let i = 0;
while ((match = regex.exec(js)) !== null) {
  console.log(`Path ${i++}:`, match[1].slice(0, 100));
}
