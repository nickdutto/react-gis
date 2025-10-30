import type { StorybookConfig } from "@storybook/react-vite";

import { createRequire } from "node:module";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);

/**
 * Resolve the absolute path of a package within a monorepo
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../src/stories/map.stories.tsx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("storybook-addon-deep-controls"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
export default config;
