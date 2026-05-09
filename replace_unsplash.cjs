const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const imagesDir = path.join(__dirname, 'public', 'images');
const localFiles = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

// Intelligent mapping for specific pages
const semanticMapping = {
  'Home.tsx': '592414871_820411847418526_8779992772699709020_n.jpg',
  'About.tsx': '653703364_902944365831940_4108709589071447332_n.jpg',
  'Catalog.tsx': '497517940_663880973071615_2558727842565097558_n.jpg',
  'Models.tsx': '475277773_586964890763224_1335059651832504129_n.jpg',
  'Workshops.tsx': '653704609_902944419165268_873491369390833829_n.jpg',
  'Services.tsx': '474843510_588544520605261_223940177265882897_n.jpg',
  'Contact.tsx': '653703565_900705679389142_1339018922596775200_n.jpg'
};

const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[?&a-zA-Z0-9=-]*/g;

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile()) {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        callback(filePath, stat);
      }
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

let replacedCount = 0;

walkSync(srcDir, function(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  const fileName = path.basename(filePath);
  
  content = content.replace(regex, (match) => {
    hasChanges = true;
    replacedCount++;
    // If it's one of the mapped pages and it's the first match (likely the hero), use the specific image
    if (semanticMapping[fileName]) {
      const img = semanticMapping[fileName];
      // remove it from mapping so we don't use it again for other images in the same file
      delete semanticMapping[fileName];
      return `/images/${img}`;
    }
    // Pick a random local image
    const randomImage = localFiles[Math.floor(Math.random() * localFiles.length)];
    return `/images/${randomImage}`;
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${fileName}`);
  }
});

console.log(`Successfully replaced ${replacedCount} Unsplash images.`);
