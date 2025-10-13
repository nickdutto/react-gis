import baseConfig from "@react-gis-openlayers/eslint/base";
import reactConfig from "@react-gis-openlayers/eslint/react";
import storybookConfig from "@react-gis-openlayers/eslint/storybook";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...reactConfig, ...storybookConfig];

export default config;
