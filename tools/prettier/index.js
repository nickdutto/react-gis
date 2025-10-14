/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  endOfLine: "auto",
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrder: [
    "<TYPES>",
    "",
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>^@react-gis",
    "",
    "^@react-gis/(.*)$",
    "",
    "<TYPES>^[.|..|~]",
    "^~/",
    "",
    "^[../]",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.9.0",
  tailwindAttributes: ["className", "classNames"],
  tailwindFunctions: ["clsx", "cn", "tv"],
};

export default config;
