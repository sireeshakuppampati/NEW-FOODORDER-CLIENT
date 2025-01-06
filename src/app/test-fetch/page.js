"use client";

import React, { useEffect, useState } from "react";

const FetchUsersTest = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://ec2-18-234-125-13.compute-1.amazonaws.com:8080/New-FoodOrdering/users/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h3>Fetched Data</h3>
            <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
};

export default FetchUsersTest;
