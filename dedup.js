const fs = require('fs');

const dataFile = 'data/products.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const seen = new Set();
const deduped = data.products.filter(p => { 
  if (seen.has(p.id)) return false; 
  seen.add(p.id); 
  return true; 
});
fs.writeFileSync(dataFile, JSON.stringify({products: deduped}, null, 2));
console.log('Duplicates removed.');
