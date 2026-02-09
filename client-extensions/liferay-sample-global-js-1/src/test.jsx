import React from "react";
import ReactDOM from "react-dom/client";
import StudentManager from "./StudentManager";

// For local testing - renders StudentManager directly to the page
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentManager />);

console.log("🧪 Student Manager loaded in LOCAL TESTING MODE");
console.log("📡 Will call: http://localhost:3001/api/students");
