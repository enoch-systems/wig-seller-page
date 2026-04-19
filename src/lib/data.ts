export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  images: string[];
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'women', name: 'Women' },
  { id: 'men', name: 'Men' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'bags', name: 'Bags' },
  { id: 'accessories', name: 'Accessories' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Lace Front Wig - Body Wave',
    category: 'Human Hair',
    price: 125000,
    rating: 4.8,
    images: [
      '/product-images/product1/product1_image1.avif',
      '/product-images/product1/product1_image2.avif',
      '/product-images/product1/product1_image3.avif',
      '/product-images/product1/product1_image4.avif',
    ],
    badge: 'New',
  },
  {
    id: '2',
    name: 'Full Lace Wig - Straight',
    category: 'Human Hair',
    price: 185000,
    rating: 4.9,
    images: [
      '/product-images/product2/product2_image1.avif',
      '/product-images/product2/product2_image2.avif',
      '/product-images/product2/product2_image3.avif',
      '/product-images/product2/product2_image4.avif',
      '/product-images/product2/product2_image5.avif',
      '/product-images/product2/product2_image6.avif',
    ],
  },
  {
    id: '3',
    name: 'Bob Cut Wig - Curly',
    category: 'Human Hair',
    price: 95000,
    rating: 4.7,
    images: [
      '/product-images/product3/product3_image1.avif',
      '/product-images/product3/product3_image2.avif',
      '/product-images/product3/product3_image3.avif',
      '/product-images/product3/product3_image4.avif',
      '/product-images/product3/product3_image5.avif',
      '/product-images/product3/product3_image6.avif',
      '/product-images/product3/product3_image7.avif',
      '/product-images/product3/product3_image8.avif',
    ],
  },
  {
    id: '4',
    name: 'Synthetic Wig - Wavy',
    category: 'Synthetic',
    price: 210000,
    rating: 4.6,
    images: [
      '/product-images/product4/product4_image1.avif',
      '/product-images/product4/product4_image2.avif',
      '/product-images/product4/product4_image3.avif',
      '/product-images/product4/product4_image4.avif',
    ],
    badge: 'Sale',
  },
  {
    id: '5',
    name: 'U-Part Wig - Kinky Straight',
    category: 'Human Hair',
    price: 145000,
    rating: 4.5,
    images: [
      '/product-images/product5/product5_image1.avif',
      '/product-images/product5/product5_image2.avif',
      '/product-images/product5/product5_image3.avif',
      '/product-images/product5/product5_image4.avif',
      '/product-images/product5/product5_image5.avif',
      '/product-images/product5/product5_image6.avif',
    ],
  },
  {
    id: '6',
    name: 'Glueless Wig - Deep Wave',
    category: 'Human Hair',
    price: 175000,
    rating: 4.8,
    images: [
      '/product-images/product6/product6_image1.avif',
      '/product-images/product6/product6_image2.avif',
      '/product-images/product6/product6_image3.avif',
      '/product-images/product6/product6_image4.avif',
      '/product-images/product6/product6_image5.avif',
      '/product-images/product6/product6_image6.avif',
    ],
  },
  {
    id: '7',
    name: 'Pixie Cut Wig - Short & Sassy',
    category: 'Human Hair',
    price: 89000,
    rating: 4.9,
    images: [
      '/product-images/product7/product7_image1.avif',
      '/product-images/product7/product7_image2.avif',
      '/product-images/product7/product7_image3.avif',
      '/product-images/product7/product7_image4.avif',
    ],
    badge: 'New',
  },
  {
    id: '8',
    name: 'Closure Wig - Loose Wave',
    category: 'Human Hair',
    price: 225000,
    rating: 4.4,
    images: [
      '/product-images/product8/product8_image1.avif',
      '/product-images/product8/product8_image2.avif',
      '/product-images/product8/product8_image3.avif',
    ],
  },
];

export const promotionalBanners = [
  {
    id: '1',
    title: 'Summer Collection',
    subtitle: 'Up to 50% Off',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
    cta: 'Shop Now',
    size: 'large',
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Fresh Styles',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    cta: 'Discover',
    size: 'small',
  },
  {
    id: '3',
    title: 'Accessories',
    subtitle: 'Complete Your Look',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop',
    cta: 'View All',
    size: 'small',
  },
  {
    id: '4',
    title: 'Premium Quality',
    subtitle: 'Handcrafted Excellence',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
    cta: 'Learn More',
    size: 'wide',
  },
];
