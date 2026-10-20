const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/Gogul/.gemini/antigravity-ide/brain/1136bff6-92c7-4bc8-9590-790339c51a1d/.system_generated/logs/transcript_full.jsonl';
const fileStream = fs.createReadStream(filePath);
const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

const mp4s = new Set();
rl.on('line', (line) => {
  const m = line.match(/https?:\/\/[^\s"'\\<>]+\.(?:mp4|webm|m3u8)[^\s"'\\<>]*/gi);
  if (m) m.forEach(u => mp4s.add(u));
});

rl.on('close', () => {
  console.log('Total Video URLs found:', mp4s.size);
  mp4s.forEach(u => console.log('VIDEO:', u));
});
