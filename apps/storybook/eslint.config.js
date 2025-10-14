import baseConfig from "@react-gis/eslint/base";
import reactConfig from "@react-gis/eslint/react";
import storybookConfig from "@react-gis/eslint/storybook";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...reactConfig, ...storybookConfig];

export default config;
