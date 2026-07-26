import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "/tarek-salam-website/" : "/";
  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),
      },
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      rollupOptions: {
        input: path.resolve(__dirname, "client/index.html"),
      },
    },
    server: {
      port: 3000,
      host: true,
    },
  };
});
