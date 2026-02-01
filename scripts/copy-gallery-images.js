const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourceCertDir = '/Users/anujsharma/swaroop-industries/public/saroop/Certificate New 2026 PIC';
const sourceProductDir = '/Users/anujsharma/swaroop-industries/public/saroop/Top Pic';
const destCertDir = '/Users/anujsharma/swaroop-industries/public/gallery/certificates';
const destProductDir = '/Users/anujsharma/swaroop-industries/public/gallery/products';

// Ensure destination directories exist
[destCertDir, destProductDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Copy and rename certificates
console.log('\n=== Copying Certificate Images ===');
const certFiles = [
  '2027.jpg',
  'Logo.jpg',
  'MIQA.jpg',
  'SAROOP INDUSTRIES 14001.jpg',
  'SAROOP INDUSTRIES 16949.jpg',
  'SAROOP INDUSTRIES 45001 S2.jpg',
  'SAROOP INDUSTRIES 9001 S2.jpg',
  'SAROOP INDUSTRIES CE S2.jpg',
  'SAROOP INDUSTRIES ROHS S2.jpg',
  'SAROOP INDUSTRIES WHO-GMP S2.jpg'
];

let certCount = 0;
certFiles.forEach((file, index) => {
  const sourcePath = path.join(sourceCertDir, file);
  const ext = path.extname(file);
  const destPath = path.join(destCertDir, `certificate-${String(index + 1).padStart(2, '0')}${ext}`);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied: ${file} → certificate-${String(index + 1).padStart(2, '0')}${ext}`);
      certCount++;
    } else {
      console.log(`✗ Not found: ${file}`);
    }
  } catch (error) {
    console.error(`✗ Error copying ${file}:`, error.message);
  }
});

console.log(`\nTotal certificates copied: ${certCount}/${certFiles.length}`);

// Copy and rename products
console.log('\n=== Copying Product Images ===');
try {
  const productFiles = fs.readdirSync(sourceProductDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .sort();
  
  let productCount = 0;
  productFiles.forEach((file, index) => {
    const sourcePath = path.join(sourceProductDir, file);
    const ext = path.extname(file);
    const destPath = path.join(destProductDir, `product-${String(index + 1).padStart(2, '0')}${ext}`);
    
    try {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied: ${file} → product-${String(index + 1).padStart(2, '0')}${ext}`);
      productCount++;
    } catch (error) {
      console.error(`✗ Error copying ${file}:`, error.message);
    }
  });
  
  console.log(`\nTotal products copied: ${productCount}/${productFiles.length}`);
} catch (error) {
  console.error('Error reading product directory:', error.message);
}

console.log('\n=== Gallery Image Organization Complete! ===');
