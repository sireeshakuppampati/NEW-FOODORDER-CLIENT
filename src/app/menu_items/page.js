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
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", textAlign: "left" }}>
                <thead>
                <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Menu Item ID</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Item Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map((item) => (
                    <tr key={item.id}>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.id}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.name}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>${item.price.toFixed(2)}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.description || "N/A"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MenuItemsPage;
