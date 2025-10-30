import path from "node:path";
import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineProject, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

const dirname =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineProject({
    root: dirname,
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      storybookTest({
        configDir: path.join(dirname, ".storybook"),
      }),
    ],
    test: {
      name: "storybook",
      browser: {
        enabled: true,
        provider: playwright({}),
        headless: true,
        instances: [{ browser: "chromium" }],
      },
      setupFiles: [path.join(dirname, ".storybook/vitest.setup.ts")],
    },
  }),
);
