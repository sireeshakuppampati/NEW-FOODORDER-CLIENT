"use client";

import React, { useState, useEffect } from "react";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://localhost:8080/New-FoodOrdering/orders/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setOrders(data);
            } catch (err) {
                console.error("Error fetching orders:", err.message);
                setError("Failed to fetch orders. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/New-FoodOrdering/orders/delete/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setMessage("Order deleted successfully!");
            setOrders(orders.filter((order) => order.orderId !== id));
        } catch (err) {
            console.error("Error deleting order:", err.message);
            setMessage("Failed to delete order. Please try again.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (orders.length === 0) return <p>No orders found.</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h3>Order Details</h3>
            {message && <p>{message}</p>}
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>User Name</th>
                    <th>Menu Item</th>
                    <th>Restaurant Name</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Total Amount</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.orderId}>
                        <td>{order.orderId}</td>
                        <td>{order.userName}</td>
                        <td>{order.menuItemName}</td>
                        <td>{order.restaurantName || "N/A"}</td> {/* Display Restaurant Name */}
                        <td>{order.orderDate}</td>
                        <td>{order.status}</td>
                        <td>${order.totalAmount.toFixed(2)}</td>
                        <td>
                            <button onClick={() => handleDelete(order.orderId)} style={{ color: "red" }}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
