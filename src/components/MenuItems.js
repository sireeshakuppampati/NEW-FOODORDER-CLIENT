"use client";

import React, { useEffect, useState } from "react";

const MenuItemsPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch("http://localhost:8080/New-FoodOrdering/menu_items/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMenuItems(data);
            } catch (err) {
                console.error("Error fetching menu items:", err.message);
                setError("Failed to fetch menu items. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h3>Menu Items</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                <tr>
                    <th>Menu Item ID</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>{item.description || "N/A"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MenuItemsPage;
