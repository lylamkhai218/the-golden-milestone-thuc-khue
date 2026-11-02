import { defineConfig } from "vite";

// Base path configuration for GitHub Pages
// User target: https://lylamkhai218.github.io/the-golden-milestone-thuc-khue/
const repoName = "the-golden-milestone-thuc-khue";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGitHubActions ? `/${repoName}/` : "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    cssMinify: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
