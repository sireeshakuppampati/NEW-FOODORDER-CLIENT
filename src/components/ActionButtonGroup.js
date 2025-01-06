"use client";

import React, { useState } from "react";
import Users from "./Users"; // Component for Users logic
import MenuItems from "./MenuItems"; // Component for MenuItems logic
import Orders from "./Orders"; // Component for Orders logic
import Restaurants from "./Restaurants"; // Component for Restaurants logic

const ActionTabs = () => {
    const [activeTab, setActiveTab] = useState("users");

    return (
        <div style={{ padding: "20px" }}>
            {/* Main Tabs */}
            <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: activeTab === "users" ? "#007bff" : "#ccc",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setActiveTab("users")}
                >
                    Users
                </button>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: activeTab === "menuitems" ? "#007bff" : "#ccc",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setActiveTab("menuitems")}
                >
                    Menu Items
                </button>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: activeTab === "orders" ? "#007bff" : "#ccc",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setActiveTab("orders")}
                >
                    Orders
                </button>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: activeTab === "restaurants" ? "#007bff" : "#ccc",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setActiveTab("restaurants")}
                >
                    Restaurants
                </button>
            </div>

            {/* Content Area */}
            <div>
                {activeTab === "users" && <Users />}
                {activeTab === "menu_items" && <MenuItems />}
                {activeTab === "orders" && <Orders />}
                {activeTab === "restaurants" && <Restaurants />}
            </div>
        </div>
    );
};

export default ActionTabs;
