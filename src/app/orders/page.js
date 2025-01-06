"use client";

import React, { useEffect, useState } from "react";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
            {message && <p style={{ color: "green" }}>{message}</p>}
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", textAlign: "left" }}>
                <thead>
                <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order ID</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Customer Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Menu Item</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Restaurant Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order Date</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Total Amount</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.orderId}>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.orderId}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.userName}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.menuItemName}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.restaurantName || "N/A"}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.orderDate}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.status}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>${order.totalAmount.toFixed(2)}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
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
