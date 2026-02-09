import React from "react";
import ReactDOM from "react-dom/client";
import StudentManager from "./StudentManager";

class WebComponent extends HTMLElement {
    connectedCallback() {
        const root = ReactDOM.createRoot(this);
        root.render(<StudentManager />);
    }
}

const ELEMENT_ID = "hello-page-element";

if (!customElements.get(ELEMENT_ID)) {
    customElements.define(ELEMENT_ID, WebComponent);
}

console.log(" Sample Global JS Client Extension deployed");
