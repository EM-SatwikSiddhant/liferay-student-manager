import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentManager = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // React → Node.js Backend (port 3001) → Liferay
                const response = await axios.get(
                    "http://localhost:3001/api/students"
                );

                setUserData(response.data);
            } catch (e) {
                console.error("Error fetching students", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="student-loading">Data is loading...</p>;
    }

    if (!userData?.items?.length) {
        return <p className="student-empty">There is no data</p>;
    }

    const { name, email } = userData.items[0];

    return (
        <div className="student-manager">
            <h1 className="student-title">Student Manager</h1>

            <div className="student-card">
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
            </div>
        </div>
    );
};

export default StudentManager;
