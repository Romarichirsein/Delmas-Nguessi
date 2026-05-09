import { createClient } from '@sanity/client';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This script uploads the local mock products to a real Sanity dataset.
// Prerequisite: You must have a .env file at the root with VITE_SANITY_PROJECT_ID and VITE_SANITY_TOKEN

import dotenv from 'dotenv';
dotenv.config({ path: join(__dirname, '../.env') });

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const token = process.env.VITE_SANITY_TOKEN;

if (!projectId || !token) {
  console.error("Error: Please set VITE_SANITY_PROJECT_ID and VITE_SANITY_TOKEN in your .env file.");
  process.exit(1);
}

const client = createClient({
  projectId: projectId,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  token: token,
  apiVersion: '2024-03-01',
});

const imagesDir = join(__dirname, '../public/images');
const files = readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const categories = ["Robe de Soirée", "Robe de Gala", "Tenue Business", "Ensembles", "Mariage", "Accessoires"];
const styles = ["Élégant", "Magnifié", "Afro-Chic", "Business", "Audacieux"];

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

async function uploadImage(filePath) {
  try {
    const buffer = readFileSync(filePath);
    const asset = await client.assets.upload('image', buffer, {
      filename: filePath.split('/').pop()
    });
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", filePath, error);
    return null;
  }
}

async function main() {
  console.log("Starting import to Sanity...");
  
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    console.log(`Processing ${index + 1}/${files.length}: ${file}`);
    
    const category = categories[index % categories.length];
    const style = styles[index % styles.length];
    const baseTitle = titles[category][index % titles[category].length];
    const title = `${baseTitle} Edition ${index + 1}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const price = (Math.floor(Math.random() * 10) + 5) * 50000;
    const isNew = index < 20;
    const isFeatured = index % 5 === 0;
    
    // Upload main image
    const mainImageAssetId = await uploadImage(join(imagesDir, file));
    if (!mainImageAssetId) continue;
    
    // Select 2 random gallery images
    const galleryFiles = files.filter((f, i) => i !== index).slice(0, 2);
    const galleryAssetIds = [];
    for (const gf of galleryFiles) {
      const gId = await uploadImage(join(imagesDir, gf));
      if (gId) galleryAssetIds.push(gId);
    }
    
    const doc = {
      _type: 'product',
      title: title,
      slug: { _type: 'slug', current: slug },
      price: price,
      category: category,
      style: style,
      isNew: isNew,
      isFeatured: isFeatured,
      colors: ["#000000", "#D4AF37", "#991B1B"].slice(0, (index % 3) + 1),
      description: descriptions[index % descriptions.length],
      mainImage: {
        _type: 'image',
        asset: {
          _type: "reference",
          _ref: mainImageAssetId
        }
      },
      gallery: galleryAssetIds.map(id => ({
        _type: 'image',
        asset: {
          _type: "reference",
          _ref: id
        }
      }))
    };
    
    try {
      await client.create(doc);
      console.log(`✅ Created product: ${title}`);
    } catch (error) {
      console.error(`❌ Failed to create product: ${title}`, error);
    }
  }
  
  console.log("Import completed!");
}

main().catch(console.error);
