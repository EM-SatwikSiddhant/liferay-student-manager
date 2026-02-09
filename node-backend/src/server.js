import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const LIFERAY_BASE_URL = "http://localhost:8080";
const LIFERAY_USERNAME = "test@liferay.com";
const LIFERAY_PASSWORD = "learn";

app.get("/api/students", async (req, res) => {
    try {
        console.log("students from Liferay");

        const response = await axios.get(
            `${LIFERAY_BASE_URL}/o/c/students`,
            {
                auth: {
                    username: LIFERAY_USERNAME,
                    password: LIFERAY_PASSWORD,
                },
            }
        );

        console.log("fetched students from Liferay");
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching students from Liferay:", error.message);
        res.status(500).json({
            error: "Failed to fetch students from Liferay",
            details: error.message
        });
    }
});


app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Node backend is running" });
});

app.listen(PORT, () => {
    console.log(` Node.js Backend running on http://localhost:${PORT}`);
});
