const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const outputFilePath = path.join(__dirname, 'public', 'gallery.html');

const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

let html = `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; background: #fff; margin: 20px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .card { border: 1px solid #ccc; padding: 10px; display: flex; flex-direction: column; align-items: center; }
  img { max-width: 100%; height: 300px; object-fit: contain; margin-bottom: 10px; }
  .filename { font-size: 12px; font-weight: bold; word-break: break-all; }
</style>
</head>
<body>
  <h1>Image Gallery for Classification</h1>
  <div class="grid" id="grid">
`;

files.forEach(file => {
  html += `
    <div class="card">
      <img src="images/${file}" alt="${file}" />
      <div class="filename">${file}</div>
    </div>
  `;
});

html += `
  </div>
</body>
</html>
`;

fs.writeFileSync(outputFilePath, html);
console.log('Successfully generated gallery.html with ' + files.length + ' images.');
