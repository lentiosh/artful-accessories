
export type Review = {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  productType: 'accessories' | 'jewelry' | 'general';
  productId?: string;
  avatar?: string;
};

export const reviews: Review[] = [
  {
    id: 'rev-001',
    name: 'Sophia K.',
    location: 'Athens, Greece',
    date: 'May 12, 2023',
    rating: 5,
    comment: 'The handwoven straw bag is even more beautiful in person! The craftsmanship is exceptional and I\'ve received so many compliments. It\'s perfect for summer days in the city or at the beach.',
    productType: 'accessories',
    productId: 'acc-001',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop'
  },
  {
    id: 'rev-002',
    name: 'Elena M.',
    location: 'Santorini, Greece',
    date: 'June 3, 2023',
    rating: 5,
    comment: 'I purchased the silver olive leaf necklace as a gift for my sister, and she absolutely loves it! The silver work is delicate but sturdy, and the design is a beautiful representation of our Greek heritage.',
    productType: 'jewelry',
    productId: 'jew-001',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
  },
  {
    id: 'rev-003',
    name: 'Marcus P.',
    location: 'Berlin, Germany',
    date: 'April 18, 2023',
    rating: 4,
    comment: 'The leather belt is excellent quality and the hammered buckle is unique and eye-catching. I\'ve been wearing it almost daily and it\'s developing a wonderful patina. Only wish it came in more color options.',
    productType: 'accessories',
    productId: 'acc-003',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 'rev-004',
    name: 'Isabelle R.',
    location: 'Paris, France',
    date: 'July 8, 2023',
    rating: 5,
    comment: 'The sea glass bracelet is stunning and reminds me of my vacation in Greece. Each piece of glass is unique and the silver work is impeccable. It\'s become my favorite piece of jewelry!',
    productType: 'jewelry',
    productId: 'jew-003',
    avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop'
  },
  {
    id: 'rev-005',
    name: 'Dimitri A.',
    location: 'Thessaloniki, Greece',
    date: 'May 29, 2023',
    rating: 5,
    comment: 'I\'ve ordered multiple pieces and every time I\'m amazed by the quality and attention to detail. The evil eye bracelet has become a cherished possession that I wear daily. The craftsmanship truly honors Greek tradition.',
    productType: 'general',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    id: 'rev-006',
    name: 'Anna T.',
    location: 'New York, USA',
    date: 'August 15, 2023',
    rating: 5,
    comment: 'The hand-painted silk scarf is a work of art! The colors are vibrant and the design is unique. I appreciate the personal touch of knowing that an artisan created this just for me. Shipping to the US was also faster than expected!',
    productType: 'accessories',
    productId: 'acc-005',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop'
  }
];

export const getFeaturedReviews = () => {
  return reviews.filter(review => review.rating >= 4).slice(0, 4);
};

export const getProductReviews = (productId: string) => {
  return reviews.filter(review => review.productId === productId);
};

export const getCategoryReviews = (category: 'accessories' | 'jewelry') => {
  return reviews.filter(review => review.productType === category);
};
