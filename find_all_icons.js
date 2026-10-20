const fs = require('fs');
const code = fs.readFileSync('assets/icons.ofWx6Oua.js', 'utf8');

// Search for icon definitions
const names = ['menu', 'history', 'wishlist', 'cart', 'bag', 'plus', 'arrow', 'close', 'search'];
for (const n of names) {
  let pos = 0;
  while ((pos = code.indexOf(`"${n}"`, pos)) !== -1) {
    console.log(`Icon "${n}" at ${pos}:`);
    console.log(code.slice(Math.max(0, pos - 100), Math.min(code.length, pos + 250)));
    pos += n.length + 2;
    break;
  }
}
