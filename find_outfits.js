const fs = require('fs');
const code = fs.readFileSync('assets/main.xX0UAeTO.js', 'utf8');

const regex = /"([^"]*?(?:WOUTFIT|MOUTFIT|outfit)[^"]*?)"/gi;
let m;
const items = new Set();
while ((m = regex.exec(code)) !== null) {
  items.add(m[1]);
}
console.log('Total Women/Men outfits found:', items.size);
items.forEach(it => console.log(it));
