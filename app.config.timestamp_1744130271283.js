// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import nodePolyfills from "vite-plugin-node-polyfills";
var app_config_default = defineConfig({
  tsr: {
    appDirectory: "src"
  },
  routers: {
    client: {
      vite: {
        plugins: [
          nodePolyfills({
            // Enable node built-in modules polyfills
            protocolImports: true
          })
        ]
      }
    }
  },
  vite: {
    resolve: {
      // alias: {
      //   // Alias the node 'buffer' module to the browser-friendly package
      //   buffer: "buffer/", // The trailing slash is important
      // },
    },
    ssr: {
      // Force Vite to process this dependency instead of externalizing it
      noExternal: ["@solana-agent-kit/plugin-token"]
    },
    // You might still need optimizeDeps for the browser build
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".json": "json"
        }
      }
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"]
      })
    ]
  }
});
export {
  app_config_default as default
};
