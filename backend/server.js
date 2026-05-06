const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const products = [
  { 
    _id: '1', 
    name: 'Victory Pro X 2.0', 
    description: 'Engineered for the discerning athlete, the Victory Pro X 2.0 fuses traditional craftsmanship with cutting-edge carbon technology. The 16mm profile offers unprecedented control, while the refined surface texture maximizes spin potential. A testament to Heritage Performance.', 
    price: 21605, 
    category: 'Equipment',
    series: 'Victory Series',
    image: 'https://images.unsplash.com/photo-1622227421867-b892a065961e?w=800&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1622227421867-b892a065961e?w=200&q=80',
      'https://images.unsplash.com/photo-1622227421867-b892a065961e?w=200&q=80&crop=edges',
      'https://images.unsplash.com/photo-1622227421867-b892a065961e?w=200&q=80&crop=entropy'
    ],
    specs: {
      'Thickness': '16mm',
      'Surface Material': 'Carbon Fiber',
      'Core Technology': 'Honeycomb',
      'Weight': '8.0oz'
    },
    limitedEdition: true
  },
  { 
    _id: '2', 
    name: 'Aurus X Paddle', 
    description: 'Balanced precision for the refined player, featuring a responsive core and classic grip.', 
    price: 12499, 
    category: 'Paddles', 
    series: 'Aurus Series',
    image: 'https://images.unsplash.com/photo-1549474776-4dcd5e252a12?w=800&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1549474776-4dcd5e252a12?w=200&q=80',
      'https://images.unsplash.com/photo-1549474776-4dcd5e252a12?w=200&q=80&crop=edges',
      'https://images.unsplash.com/photo-1549474776-4dcd5e252a12?w=200&q=80&crop=entropy'
    ],
    specs: {
      'Thickness': '14mm',
      'Surface Material': 'Fiberglass',
      'Core Technology': 'Polymer',
      'Weight': '7.8oz'
    },
    limitedEdition: false
  },
  { _id: '3', name: 'Powerserve 2.0', description: 'Tournament-approved spheres designed for consistent bounce and exceptional durability.', price: 1299, category: 'Accessories', image: 'https://images.unsplash.com/photo-1621644754585-78e06f97f744?w=800&q=80' },
  { _id: '4', name: 'Elegance Series Dress', description: 'A timeless silhouette updated with moisture-wicking technology for uncompromised grace.', price: 8999, category: 'Apparel', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80' },
  { _id: '5', name: 'Fortis Track Suit', description: 'Pre-match preparation wear blending heritage styling with modern thermal regulation.', price: 15999, category: 'Apparel', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80' },
  { _id: '6', name: 'Sportiva Mile-Speed Shoes', description: 'Lightweight court footwear engineered for lateral stability and explosive baseline movement.', price: 11499, category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' },
  { _id: '7', name: 'Invicto Shoulder Bag', description: 'Carry your essentials with club-level sophistication. Features dedicated paddle compartments.', price: 18999, category: 'Accessories', image: 'https://images.unsplash.com/photo-1547949007-536625863c0a?w=800&q=80' },
  { _id: '8', name: 'Professional Tournament Grade Net', description: 'The official standard for competitive play. Unyielding tension and pristine aesthetics.', price: 25999, category: 'Equipment', image: 'https://images.unsplash.com/photo-1533036665762-b94d13b41d2f?w=800&q=80' },
];

app.get('/api/status', (req, res) => {
  res.json({ status: 'Maxwill India Backend is running' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
