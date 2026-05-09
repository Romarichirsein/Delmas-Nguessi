import { useState, useEffect } from 'react';
import { client, mockProducts } from '../lib/sanity';

export function useProducts() {
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      // If Sanity token is provided, try to fetch from Sanity
      if (import.meta.env.VITE_SANITY_TOKEN && import.meta.env.VITE_SANITY_PROJECT_ID) {
        try {
          const query = `*[_type == "product"]{
            _id,
            title,
            "id": _id,
            "slug": slug.current,
            price,
            "mainImage": mainImage.asset->url,
            "gallery": gallery[].asset->url,
            category,
            style,
            isNew,
            isFeatured,
            colors,
            description
          }`;
          const sanityProducts = await client.fetch(query);
          
          if (sanityProducts && sanityProducts.length > 0) {
            setProducts(sanityProducts);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error("Failed to fetch from Sanity, falling back to local data:", error);
        }
      }
      
      // Fallback to local data
      setProducts(mockProducts);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  return { products, loading };
}
