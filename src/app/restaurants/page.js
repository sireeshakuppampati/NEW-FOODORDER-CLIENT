"use client";

import React, { useEffect, useState } from "react";

const RestaurantsPage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch("http://localhost:8080/New-FoodOrdering/restaurants/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setRestaurants(data);
            } catch (err) {
                console.error("Error fetching restaurants:", err.message);
                setError("Failed to fetch restaurants. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h3>Restaurants</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", textAlign: "left" }}>
                <thead>
                <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Restaurant ID</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Location</th>
                </tr>
                </thead>
                <tbody>
                {restaurants.map((restaurant) => (
                    <tr key={restaurant.id}>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{restaurant.id}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{restaurant.name}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{restaurant.location || "N/A"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RestaurantsPage;
