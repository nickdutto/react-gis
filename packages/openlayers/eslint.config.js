import baseConfig from "@react-gis/eslint/base";
import reactConfig from "@react-gis/eslint/react";

/** @type {import('typescript-eslint').Config} */
const config = [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];

export default config;
