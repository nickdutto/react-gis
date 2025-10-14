import { tanstackViteConfig } from "@tanstack/config/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vite";

const config = defineConfig({
  plugins: [react()],
});

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: ["./src/control/index.ts", "./src/layer/index.ts", "./src/map/index.ts"],
    srcDir: "./src",
  }),
);
