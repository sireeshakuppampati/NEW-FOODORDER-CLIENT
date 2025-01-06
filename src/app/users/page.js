"use client";

import React, { useEffect, useState } from "react";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:8080/New-FoodOrdering/users/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.error("Error fetching users:", err.message);
                setError("Failed to fetch users. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/New-FoodOrdering/users/delete/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setMessage("User deleted successfully!");
            setUsers(users.filter((user) => user.id !== id));
        } catch (err) {
            console.error("Error deleting user:", err.message);
            setMessage("Failed to delete user. Please try again.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h3>Customers</h3>
            {message && <p>{message}</p>}
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", textAlign: "left" }}>
                <thead>
                <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Customer ID</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Phone Number</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.id}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.name}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.email}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.phoneNumber}</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                            <button onClick={() => handleDelete(user.id)} style={{ color: "red" }}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;
