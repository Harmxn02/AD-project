// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "src/assets/js/build",
        rollupOptions: {
            input: "src/App.jsx"
        },
    }
    // Other configuration options as needed
});