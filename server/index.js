const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded products array
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 699.99 },
  { id: 3, name: 'Headphones', price: 149.99 },
  { id: 4, name: 'Keyboard', price: 79.99 },
  { id: 5, name: 'Mouse', price: 49.99 },
  { id: 6, name: 'Monitor', price: 299.99 },
  { id: 7, name: 'Webcam', price: 89.99 },
  { id: 8, name: 'USB Cable', price: 12.99 }
];

// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Express API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
