const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Indoor Favorites',
    price: 1299,
    description: 'Large split leaves and a bold tropical look for bright rooms.',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Snake Plant',
    category: 'Indoor Favorites',
    price: 899,
    description: 'A hardy favorite with upright leaves and easy care.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Indoor Favorites',
    price: 1099,
    description: 'Elegant white blooms that bring a calming, fresh feel.',
    image:
      'https://images.unsplash.com/photo-1512428817848-4c1b5d5f4f2f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'ZZ Plant',
    category: 'Indoor Favorites',
    price: 1199,
    description: 'Glossy leaves and low-maintenance beauty for busy homes.',
    image:
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Spider Plant',
    category: 'Indoor Favorites',
    price: 799,
    description: 'Arching foliage and playful baby plantlets for charm.',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Aloe Vera',
    category: 'Indoor Favorites',
    price: 699,
    description: 'A soothing, resilient succulent for sunny corners.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    name: 'Boston Fern',
    category: 'Air-Purifying Picks',
    price: 999,
    description: 'Feathery leaves that add softness and clean air vibes.',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    name: 'Areca Palm',
    category: 'Air-Purifying Picks',
    price: 1599,
    description: 'Tropical elegance and a natural way to refresh your room.',
    image:
      'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    name: 'Rubber Plant',
    category: 'Air-Purifying Picks',
    price: 1299,
    description: 'Deep green foliage with a sleek silhouette for modern interiors.',
    image:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 10,
    name: 'Pothos',
    category: 'Air-Purifying Picks',
    price: 599,
    description: 'Easy trailing vines that brighten shelves and hanging baskets.',
    image:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 11,
    name: 'Philodendron',
    category: 'Air-Purifying Picks',
    price: 849,
    description: 'Lush heart-shaped leaves with a cheerful tropical look.',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 12,
    name: 'Dracaena',
    category: 'Air-Purifying Picks',
    price: 1099,
    description: 'Long colorful stems and leaves that suit modern styled spaces.',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 13,
    name: 'Calathea Orbifolia',
    category: 'Pet-Friendly Picks',
    price: 1399,
    description: 'Soft striped foliage for a statement plant in calm rooms.',
    image:
      'https://images.unsplash.com/photo-1533603872003-c2f17d3f1d5f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 14,
    name: 'Parlor Palm',
    category: 'Pet-Friendly Picks',
    price: 1199,
    description: 'A gentle, airy palm that feels cozy and bright in any room.',
    image:
      'https://images.unsplash.com/photo-1600412495653-7a9c15f36f32?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 15,
    name: 'Haworthia',
    category: 'Pet-Friendly Picks',
    price: 649,
    description: 'Tiny sculptural rosettes that are easy to display anywhere.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 16,
    name: 'Prayer Plant',
    category: 'Pet-Friendly Picks',
    price: 899,
    description: 'Distinctive leaves with elegant movement and rich texture.',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 17,
    name: 'Cast Iron Plant',
    category: 'Pet-Friendly Picks',
    price: 1499,
    description: 'Striking leaves with durable, forgiving care requirements.',
    image:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 18,
    name: 'Moth Orchid',
    category: 'Pet-Friendly Picks',
    price: 1799,
    description: 'A refined bloom that adds elegance and a soft tropical feel.',
    image:
      'https://images.unsplash.com/photo-1520420097279-3633907366f9?auto=format&fit=crop&w=900&q=80',
  },
]

export const categories = ['Indoor Favorites', 'Air-Purifying Picks', 'Pet-Friendly Picks']

export default plants
