"use client";

import React, { useState } from "react";

const AddUserPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !phoneNumber) {
            setMessage("All fields are required.");
            return;
        }

        try {
            const newUser = { name, email, phoneNumber };
            const response = await fetch("http://localhost:8080/New-FoodOrdering/users/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setMessage("Customer added successfully!");
            setName("");
            setEmail("");
            setPhoneNumber("");
        } catch (err) {
            console.error("Error adding user:", err.message);
            setMessage("Failed to add customer. Please try again.");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h3>Add Customer</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Phone Number:
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </label>
                <button type="submit">Add User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddUserPage;
