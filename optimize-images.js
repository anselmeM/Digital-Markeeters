const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'images');
const optimizedDir = path.join(imagesDir, 'optimized');

// Ensure optimized directory exists
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Read all image files in images/ directory
const files = fs.readdirSync(imagesDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
});

console.log(`Found ${files.length} images to optimize...`);

const sizes = [
  { name: 'sm', width: 400 },
  { name: 'md', width: 800 },
  { name: 'lg', width: 1200 }
];

async function optimizeImages() {
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    
    // Sanitize filename: replace spaces with hyphens, lowercase
    const baseName = path.basename(file, path.extname(file))
      .toLowerCase()
      .replace(/\s+/g, '-');
      
    console.log(`\nOptimizing ${file} -> base name: ${baseName}`);
    
    try {
      // 1. Generate full-size WebP
      const outFull = path.join(optimizedDir, `${baseName}.webp`);
      await sharp(filePath)
        .webp({ quality: 82 })
        .toFile(outFull);
      console.log(`  Created full-size: ${baseName}.webp`);
      
      // 2. Generate responsive sizes
      for (const size of sizes) {
        const outRes = path.join(optimizedDir, `${baseName}-${size.name}.webp`);
        await sharp(filePath)
          .resize({ width: size.width, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outRes);
        console.log(`  Created responsive size (${size.width}px): ${baseName}-${size.name}.webp`);
      }
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err);
    }
  }
  
  console.log('\nAll images optimized successfully!');
}

optimizeImages();
