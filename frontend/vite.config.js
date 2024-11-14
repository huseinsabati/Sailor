import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Set the limit in KB (default is 500 KB)
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://sailor-backend.onrender.com",
      "/uploads/": "https://sailor-backend.onrender.com",
    },
  },
});

