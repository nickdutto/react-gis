// import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";

// const compat = new FlatCompat({
//   baseDirectory: import.meta.dirname,
// });

// const eslintConfig = [
//   ...compat.config({
//     extends: ["next/core-web-vitals", "next/typescript"],
//   }),
// ];

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [nextPlugin.flatConfig.recommended, nextPlugin.flatConfig.coreWebVitals];
