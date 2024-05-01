import { defineConfig } from "vite";
import { dirname } from "path";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
