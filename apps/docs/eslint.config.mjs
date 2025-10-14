import baseConfig from "@react-gis/eslint/base";
import nextjsConfig from "@react-gis/eslint/nextjs";
import reactConfig from "@react-gis/eslint/react";
import storybookConfig from "@react-gis/eslint/storybook";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...nextjsConfig, ...reactConfig, ...storybookConfig];

export default config;

// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends('next/core-web-vitals', 'next/typescript'),
//   {
//     ignores: [
//       'node_modules/**',
//       '.next/**',
//       'out/**',
//       'build/**',
//       '.source/**',
//       'next-env.d.ts',
//     ],
//   },
// ];

// export default eslintConfig;
