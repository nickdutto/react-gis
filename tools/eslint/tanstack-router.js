import routerPlugin from "@tanstack/eslint-plugin-router";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [...routerPlugin.configs["flat/recommended"]];
