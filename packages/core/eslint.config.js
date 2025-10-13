import baseConfig from "@react-gis-openlayers/eslint/base";
import reactConfig from "@react-gis-openlayers/eslint/react";

/** @type {import('typescript-eslint').Config} */
const config = [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];

export default config;
