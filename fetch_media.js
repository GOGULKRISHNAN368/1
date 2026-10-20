const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'shop.brunellocucinelli.com',
  path: '/en-gb/ai',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-GB,en;q=0.9'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode, 'Length:', data.length);
    fs.writeFileSync('live_page.html', data);
    
    // Look for media URLs in script tags or HTML
    const mediaRegex = /(https?:\/\/[^\s"'\\]+?\.(?:mp4|webm|m3u8|jpg|jpeg|png|webp))/gi;
    const matches = data.match(mediaRegex) || [];
    const unique = [...new Set(matches)];
    console.log('Total media found:', unique.length);
    unique.forEach(u => console.log('MEDIA:', u));

    // Look for outfit or carousel objects in JSON / scripts
    const jsonMatches = data.match(/\{[^{}]*?(?:seecommerce|outfit|carousel|Callimacus)[^{}]*?\}/gi) || [];
    console.log('JSON snippets found:', jsonMatches.length);
    jsonMatches.slice(0, 10).forEach(j => console.log('JSON:', j));
  });
}).on('error', err => console.error(err));
