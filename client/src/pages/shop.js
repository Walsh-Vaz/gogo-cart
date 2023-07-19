import React, { useState } from 'react';

// Sample data (replace with your actual data from the backend)
const products = [
    { id: 1, name: 'Product 1', price: 10.99, description: 'This is product 1.' },
    { id: 2, name: 'Product 2', price: 15.99, description: 'This is product 2.' },
    { id: 3, name: 'Product 3', price: 8.49, description: 'This is product 3.' },
  // Add more products here...
];

export default function Shop() {
  // State to store the selected products
    const [selectedProducts, setSelectedProducts] = useState([]);

// Function to handle adding products to the cart
    const handleAddToCart = (product) => {
        setSelectedProducts((prevSelected) => [...prevSelected, product]);
    };

    return (
        <div className="shop-container">
            <h2>Shop Now</h2>
            <div className="product-list">
                {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            <div className="cart">
                <h3>Shopping Cart</h3>
                <ul>
                {selectedProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}