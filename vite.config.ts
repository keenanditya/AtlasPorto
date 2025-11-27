import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Kita hapus plugin khusus Replit biar gak bikin error di Vercel
  ],
  resolve: {
    alias: {
      // Ini jembatan biar tanda "@" nyambung ke folder client/src
      "@": path.resolve(process.cwd(), "client", "src"),
      "@shared": path.resolve(process.cwd(), "shared"),
    },
  },
  // Kita kasih tau Vite kalau pusat kegiatannya ada di folder 'client'
  root: "client",
  build: {
    // Hasil masakan (build) bakal ditaruh di folder client/dist
    outDir: "dist",
    emptyOutDir: true,
  },
});