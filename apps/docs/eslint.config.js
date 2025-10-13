import baseConfig from "@react-gis-openlayers/eslint/base";
import reactConfig from "@react-gis-openlayers/eslint/react";
import tanstackRouterConfig from "@react-gis-openlayers/eslint/tanstack-router";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...reactConfig, ...tanstackRouterConfig];

export default config;
