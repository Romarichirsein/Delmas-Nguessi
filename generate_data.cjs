const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const outputFilePath = path.join(__dirname, 'src', 'lib', 'data.ts');

const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const categories = ["Robe de Soirée", "Robe de Gala", "Tenue Business", "Ensembles", "Mariage", "Accessoires"];
const styles = ["Élégant", "Magnifié", "Afro-Chic", "Business", "Audacieux"];

// Descriptive titles based on category
const titles = {
  "Robe de Soirée": ["Robe Éclat Nocturne", "Robe Silhouette Divine", "Création Étoilée", "Robe Séduction Velours"],
  "Robe de Gala": ["Robe Majesté", "Création Impériale", "Robe Tapis Rouge", "Signature Royale"],
  "Tenue Business": ["Tailleur Exécutif", "Ensemble Pouvoir", "Costume Dame de Fer", "Tailleur Allure"],
  "Ensembles": ["Ensemble Harmonie", "Duo Parfait", "Ensemble Charisme", "Coordonné Élégance"],
  "Mariage": ["Robe Voile Blanc", "Création Éternité", "Robe Jour J", "Signature Nuptiale"],
  "Accessoires": ["Parure Prestigieuse", "Sac Main Signature", "Bijou Héritage", "Accessoire Sublimé"]
};

const descriptions = [
  "Une création majestueuse en soie sauvage et dentelle perlée, conçue pour magnifier la silhouette féminine.",
  "Coupe architecturale et finitions main pour cet ensemble qui impose respect et assurance.",
  "Mariant tradition et modernité, cette pièce d'exception sublimera vos moments les plus précieux.",
  "Design audacieux avec des lignes épurées. Une véritable œuvre d'art textile.",
  "Le summum de l'élégance Delmas Nguessi, avec un travail méticuleux sur les volumes et les textures."
];

let products = [];

files.forEach((file, index) => {
  const category = categories[index % categories.length];
  const style = styles[index % styles.length];
  const titleOptions = titles[category];
  const baseTitle = titleOptions[index % titleOptions.length];
  const title = `${baseTitle} Edition ${index + 1}`;
  
  const price = (Math.floor(Math.random() * 10) + 5) * 50000; // Between 250k and 750k FCFA
  
  // Gallery uses this image and 2 other random images from the same category
  const others = files.filter((f, i) => i !== index).slice(0, 2);
  const gallery = [file, ...others].map(f => `/images/${f}`);

  products.push({
    id: String(index + 1),
    title: title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    price: price,
    mainImage: `/images/${file}`,
    gallery: gallery,
    category: category,
    style: style,
    isNew: index < 20,
    isFeatured: index % 5 === 0,
    colors: ["#000000", "#D4AF37", "#991B1B"].slice(0, (index % 3) + 1),
    description: descriptions[index % descriptions.length]
  });
});

const fileContent = `// Fichier auto-généré
export const localProducts = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent);
console.log('Successfully generated ' + products.length + ' products in src/lib/data.ts');
