import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "assets",
    rollupOptions: {
      input: "src/global.jsx",
      output: {
        entryFileNames: "global.js"
      }
    }
  }
});
