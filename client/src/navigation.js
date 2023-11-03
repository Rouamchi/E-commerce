const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          id: '2',
          to: '#',
          name: 'Image number 2',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          brand: "Zara",
          countInStock: 0,
          price: '35$',
          color: 'Black',
          rating: 3,
        },
        {
          id: '4',
          name: 'Image number 4',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          brand: "Gucci",
          countInStock: 20,
          price: '35$',
          color: 'Black',
          rating: 3
        },
        {
          id: '5',
          to: '#',
          name: 'New Arrivals',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          brand: "Lacoste",
          countInStock: 5,
          price: '55$',
          color: 'Black',
          rating: 2
        },
        {
          id: '6',
          to: '#',
          name: 'Basic Tees',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          brand: "Nike",
          countInStock: 3,
          price: '75$',
          color: 'Black',
          rating: 5
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Dresses', to: '#' },
            { name: 'T-Shirts', to: '#' },
            { name: 'Jackets', to: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Bags', to: '#' },
            { name: 'Sunglasses', to: '#' },
            { name: 'Hats', to: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Zara', to: '#' },
            { name: 'Cucci', to: '#' },
            { name: 'Nike', to: '#' },
            { name: 'Lacoste', to: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          id: '1',
          to: '#',
          name: 'Image number 1',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          brand: "Zara",
          countInStock: 3,
          price: '35$',
          color: 'Black',
          rating: 1,
        },
        {
          id: '3',
          to: '#',
          name: 'Image number 3',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          brand: "Lacoste",
          countInStock: 1,
          price: '35$',
          color: 'Black',
          rating: 4
        },
        {
          id: '7',
          to: '#',
          name: 'New Arrivals',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          brand: "Nike",
          countInStock: 0,
          price: '15$',
          color: 'Black',
          rating: 4
        },
        {
          id: '8',
          to: '#',
          name: 'Artwork Tees',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          brand: "Gucci",
          countInStock: 9,
          price: '25$',
          color: 'Black',
          rating: 2
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Sweaters', to: '#' },
            { name: 'T-Shirts', to: '#' },
            { name: 'Jackets', to: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', to: '#' },
            { name: 'Sunglasses', to: '#' },
            { name: 'Hats', to: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Zara', to: '#' },
            { name: 'Cucci', to: '#' },
            { name: 'Nike', to: '#' },
            { name: 'Lacoste', to: '#' },
          ],
        },
      ],
    },
  ]
}

export default navigation