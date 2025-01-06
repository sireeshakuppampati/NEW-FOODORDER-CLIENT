// Import express and cors packages
const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Use CORS middleware
app.use(cors());

// Your routes
app.get('/New-FoodOrdering/menu_items/all', (req, res) => {
    const menuItems = [
        { id: 1, name: 'Pizza', price: 10, restaurant_id: 1 },
        { id: 2, name: 'Burger', price: 8, restaurant_id: 2 }
    ];
    res.json(menuItems); // Send the menu items as JSON response
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
