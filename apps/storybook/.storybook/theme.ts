import type { ThemeVars } from "storybook/theming";

export const theme: ThemeVars = {
  base: "dark",
  // Storybook-specific color palette
  colorPrimary: "#0681e0",
  colorSecondary: "#0681e0",
  // UI
  appBg: "#131316",
  appContentBg: "#101012",
  appPreviewBg: "#101012",
  appBorderColor: "#1D1D20",
  appBorderRadius: 4,
  // Fonts
  fontBase: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
  ].join(", "),
  fontCode: [
    "ui-monospace",
    "Menlo",
    "Monaco",
    '"Roboto Mono"',
    '"Oxygen Mono"',
    '"Ubuntu Monospace"',
    '"Source Code Pro"',
    '"Droid Sans Mono"',
    '"Courier New"',
    "monospace",
  ].join(", "),
  // Text colors
  textColor: "#bcbcc2",
  textInverseColor: "#222425",
  textMutedColor: "#71717a",
  // Toolbar default and active colors
  barTextColor: "#71717a",
  barHoverColor: "#0095ff",
  barSelectedColor: "#0095ff",
  barBg: "#131316",
  // Form colors
  buttonBg: "#18181B",
  buttonBorder: "#222226",
  booleanBg: "#18181B",
  booleanSelectedBg: "#1D1D20",
  inputBg: "#18181B",
  inputBorder: "#222226",
  inputTextColor: "#d4d4d8",
  inputBorderRadius: 4,
  brandTitle: "React GIS OpenLayers",
};
