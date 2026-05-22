const fs = require('fs');
const path = require('path');

// Load configurations
const configPath = path.join(__dirname, 'config.json');
let config = {
  baseUrl: 'https://anselmem.github.io/Digital-Markeeters',
  siteName: 'Marcy Studios',
  defaultDescription: ''
};

if (fs.existsSync(configPath)) {
  try {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch (err) {
    console.error('Error parsing config.json:', err);
  }
}

// Load templates
const loadTemplate = (name) => {
  const tPath = path.join(__dirname, 'templates', `${name}.html`);
  if (!fs.existsSync(tPath)) {
    console.error(`Template not found: ${name}`);
    return '';
  }
  return fs.readFileSync(tPath, 'utf8');
};

const templates = {
  head: loadTemplate('head'),
  nav: loadTemplate('nav'),
  footer: loadTemplate('footer')
};

// Source and destination directories
const srcDir = path.join(__dirname, 'src');
const destDir = __dirname;

if (!fs.existsSync(srcDir)) {
  console.log('Creating src/ directory. Please put your source HTML files there.');
  fs.mkdirSync(srcDir);
  process.exit(0);
}

// Read all HTML files in src/
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

if (files.length === 0) {
  console.log('No HTML files found in src/ directory.');
  process.exit(0);
}

files.forEach(file => {
  const srcFilePath = path.join(srcDir, file);
  const destFilePath = path.join(destDir, file);
  
  let content = fs.readFileSync(srcFilePath, 'utf8');
  
  // 1. Extract metadata block: <!-- @meta { ... } -->
  const metaRegex = /<!--\s*@meta\s*(\{[\s\S]*?\})\s*-->/;
  const match = content.match(metaRegex);
  
  let pageMeta = {};
  if (match) {
    try {
      pageMeta = JSON.parse(match[1]);
      // Remove the metadata block from the content
      content = content.replace(metaRegex, '');
    } catch (err) {
      console.error(`Error parsing metadata in ${file}:`, err);
    }
  }
  
  // Set default values for page meta
  const meta = {
    title: pageMeta.title || config.siteName,
    description: pageMeta.description || config.defaultDescription || '',
    ogImage: pageMeta.ogImage || 'og-default.jpg',
    pagePath: pageMeta.pagePath || file,
    baseUrl: config.baseUrl,
    siteName: config.siteName
  };
  
  // 2. Process includes: head, nav, footer
  let finalContent = content;
  
  // Replace head
  if (finalContent.includes('<!-- @include head -->')) {
    let headHtml = templates.head;
    // Replace head placeholders
    for (const [key, val] of Object.entries(meta)) {
      headHtml = headHtml.replace(new RegExp(`{{${key}}}`, 'g'), val);
    }
    finalContent = finalContent.replace('<!-- @include head -->', headHtml);
  }
  
  // Replace nav
  if (finalContent.includes('<!-- @include nav -->')) {
    finalContent = finalContent.replace('<!-- @include nav -->', templates.nav);
  }
  
  // Replace footer
  if (finalContent.includes('<!-- @include footer -->')) {
    finalContent = finalContent.replace('<!-- @include footer -->', templates.footer);
  }
  
  // 3. Fallback variable replacements in main page body
  for (const [key, val] of Object.entries(meta)) {
    finalContent = finalContent.replace(new RegExp(`{{${key}}}`, 'g'), val);
  }
  
  // Write to destination
  fs.writeFileSync(destFilePath, finalContent, 'utf8');
  console.log(`Successfully compiled: ${file} -> ${path.relative(__dirname, destFilePath)}`);
});

console.log('Build completed successfully.');
