import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://paperfox.github.io/artwork/",
  server: {
    mimeTypes: {
      "application/json": ["json"],
    },
  },
});
