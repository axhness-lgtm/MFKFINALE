const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /Signature Detail Collection/g, replace: 'Signature Detail Collection' },
  { search: /Hand-crafted Suits/g, replace: 'Hand-crafted Suits' },
  { search: /Hand-crafted Suit/g, replace: 'Hand-crafted Suit' },
  { search: /Precision fit/gi, replace: 'Precision fit' },
  { search: /Artisanal process/gi, replace: 'Artisanal process' },
  { search: /Signature creation/gi, replace: 'Signature creation' },
  { search: /Signature formal shirts/gi, replace: 'Signature formal shirts' },
  { search: /Custom women's wear/gi, replace: 'Custom women\'s wear' },
  { search: /Signature /g, replace: 'Signature ' },
  { search: /tailored/g, replace: 'tailored' },
];

function processFile(filePath) {
  if (filePath.includes('node_modules') || filePath.includes('.git') || filePath.includes('.next')) return;
  
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    files.forEach(file => processFile(path.join(filePath, file)));
  } else {
    // Only process text files
    const ext = path.extname(filePath);
    if (['.tsx', '.ts', '.js', '.json', '.md', '.css'].includes(ext)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      
      replacements.forEach(r => {
        if (r.search.test(content)) {
          content = content.replace(r.search, r.replace);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${filePath}`);
      }
    }
  }
}

// Start from root
processFile(process.cwd());
console.log('Global replacement of "Bespoke" completed.');
