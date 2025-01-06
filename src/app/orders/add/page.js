"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const AddOrder = () => {
    const [order, setOrder] = useState({
        userId: "",
        menuItemId: "",
        restaurantId: "",
        orderDate: "",
        status: "",
        totalAmount: "",
    });
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get("http://localhost:8080/New-FoodOrdering/restaurants/all");
                setRestaurants(response.data);
            } catch (err) {
                console.error("Error fetching restaurants:", err.message);
            }
        };

        fetchRestaurants();
    }, []);

    const handleChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedOrder = {
            ...order,
            userId: parseInt(order.userId, 10),
            menuItemId: parseInt(order.menuItemId, 10),
            restaurantId: parseInt(order.restaurantId, 10),
            totalAmount: parseFloat(order.totalAmount),
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/New-FoodOrdering/orders/add",
                formattedOrder,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setMessage(`Order added successfully! Order ID: ${response.data.id}`);
            setErrorMessage("");
            setOrder({
                userId: "",
                menuItemId: "",
                restaurantId: "",
                orderDate: "",
                status: "",
                totalAmount: "",
            });
        } catch (error) {
            console.error("Error adding order:", error.response || error.message);
            setErrorMessage("Failed to add order. Please try again.");
            setMessage("");
        }
    };

    return (
        <div>
            <h2>Add Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Customer ID:</label>
                    <input
                        type="number"
                        name="userId"
                        value={order.userId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Menu Item ID:</label>
                    <input
                        type="number"
                        name="menuItemId"
                        value={order.menuItemId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Restaurant:</label>
                    <select
                        name="restaurantId"
                        value={order.restaurantId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Restaurant</option>
                        {restaurants.map((restaurant) => (
                            <option key={restaurant.id} value={restaurant.id}>
                                {restaurant.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Order Date:</label>
                    <input
                        type="date"
                        name="orderDate"
                        value={order.orderDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={order.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                <div>
                    <label>Total Amount:</label>
                    <input
                        type="number"
                        step="0.01"
                        name="totalAmount"
                        value={order.totalAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Order</button>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
    );
};

export default AddOrder;
