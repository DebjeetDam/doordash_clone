import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    // Name
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Description
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    // Price
    defineField({
      name: 'price',
      title: 'Price of the dish in USD',
      type: 'number',
    }),
    // Image
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),
  ],
})
