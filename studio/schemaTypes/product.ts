import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price (FCFA)',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Robe de Soirée', value: 'Robe de Soirée'},
          {title: 'Robe de Gala', value: 'Robe de Gala'},
          {title: 'Tenue Business', value: 'Tenue Business'},
          {title: 'Ensembles', value: 'Ensembles'},
          {title: 'Mariage', value: 'Mariage'},
          {title: 'Accessoires', value: 'Accessoires'}
        ],
      }
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Élégant', value: 'Élégant'},
          {title: 'Magnifié', value: 'Magnifié'},
          {title: 'Afro-Chic', value: 'Afro-Chic'},
          {title: 'Business', value: 'Business'},
          {title: 'Audacieux', value: 'Audacieux'}
        ],
      }
    }),
    defineField({
      name: 'isNew',
      title: 'Is New?',
      type: 'boolean',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
    }),
    defineField({
      name: 'colors',
      title: 'Colors (Hex codes)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
