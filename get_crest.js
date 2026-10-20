const fs = require('fs');
const js = fs.readFileSync('assets/main.xX0UAeTO.js', 'utf8');

// Find logo or crest
const idx = js.indexOf('BRUNELLO CUCINELLI');
console.log('BRUNELLO CUCINELLI idx:', idx);
if (idx !== -1) {
  console.log(js.slice(idx - 500, idx + 500));
}
