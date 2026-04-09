const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data', 'products.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const mappings = {
  'wedding/designer-suits': '/images/wedding-jodhpuri.jpg',
  'wedding/indo-western': '/images/wedding-sherwani.jpg',
  'wedding/sherwani': '/images/wedding-embroidery.jpg',
  'wedding/designer-shirts': '/images/wedding-designer-shirt.jpg',
  'formals/business-suits': '/images/formals-suit.jpg',
  'formals/blazers': '/images/formals-blazer.jpg',
  'formals/shirts': '/images/formals-shirt.jpg',
  'custom-tailoring/international-fabrics': '/images/fabric-wool.jpg',
  'custom-tailoring/fittings': '/images/fitting-classic.jpg',
  'custom-tailoring/hand-work': '/images/handwork-lapel1.jpg'
};

data.products = data.products.map(p => ({
  ...p,
  image: mappings[p.categoryId] || p.image,
  images: [mappings[p.categoryId] || p.image]
}));

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Successfully updated product images');
