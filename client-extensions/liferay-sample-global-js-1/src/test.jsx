import React from "react";
import ReactDOM from "react-dom/client";
import StudentManager from "./StudentManager";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentManager />);

console.log("Student Manager loaded in LOCAL TESTING MODE");
console.log("call: http://localhost:3001/api/students");
