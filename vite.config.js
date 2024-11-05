import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://paperfox.github.io/artwork/",
  plugins: [],
  test: {
    globals: true,
    // environment: "jsdom",
    setupFiles: [],
  },
});
