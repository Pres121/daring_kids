import { defineConfig } from "vite";
import { resolve } from "path";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/", // Ensure proper base path for Netlify
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: {
        entry: "server",
      },
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, "my-app/index.html"),
    },
  },
});