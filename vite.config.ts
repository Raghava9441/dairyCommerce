import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options

      },
      include: "**/*.svg?react"
    },
    ),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      hooks: path.resolve(__dirname, "./src/hooks"),
      features: `${path.resolve(__dirname, "./src/features")}`,
      routes: `${path.resolve(__dirname, "./src/routes")}`,
      icons: `${path.resolve(__dirname, "./src/icons")}`,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.js'],
  },
})
