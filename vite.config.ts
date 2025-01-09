import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    proxy: {
      "/ml": {
        target: "https://us-south.ml.cloud.ibm.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
