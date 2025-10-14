import baseConfig from "@react-gis/eslint/base";
import reactConfig from "@react-gis/eslint/react";
import tanstackRouterConfig from "@react-gis/eslint/tanstack-router";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...reactConfig, ...tanstackRouterConfig];

export default config;
