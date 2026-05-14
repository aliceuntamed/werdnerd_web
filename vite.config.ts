/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor";
            }
            if (
              id.includes("@radix-ui/react-select") ||
              id.includes("framer-motion") ||
              id.includes("lucide-react")
            ) {
              return "ui";
            }
            if (id.includes("@supabase/supabase-js")) {
              return "supabase";
            }
          }
          return undefined;
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    browser: {
      enabled: true,
      provider: playwright(),
    },
  },
});
