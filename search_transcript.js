const fs = require('fs');
const readline = require('readline');

const filePath = 'C:/Users/Gogul/.gemini/antigravity-ide/brain/1136bff6-92c7-4bc8-9590-790339c51a1d/.system_generated/logs/transcript_full.jsonl';

const fileStream = fs.createReadStream(filePath);
const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

let count = 0;
rl.on('line', (line) => {
  if (line.includes('HomeCarousel') || line.includes('252FOUTFIT') || line.includes('seecommerce') || line.includes('.mp4')) {
    count++;
    // Extract matches
    const matches = line.match(/https?:\/\/[^\s"'\\]+?\.(?:mp4|webm|jpg|jpeg|png|webp|m3u8)/gi) || [];
    if (matches.length > 0) {
      console.log('Line matched! Found URLs:');
      [...new Set(matches)].forEach(u => console.log('  URL:', u));
    }
    
    const domMatch = line.match(/<div class="[^"]*HomeCarousel[^"]*"[\s\S]{0,1000}/);
    if (domMatch) {
      console.log('DOM:', domMatch[0].substring(0, 300));
    }
  }
});

rl.on('close', () => {
  console.log('Finished searching. Total matches:', count);
});
