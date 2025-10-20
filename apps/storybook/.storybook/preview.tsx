import "ol/ol.css";

import type { Preview } from "@storybook/react-vite";

import { theme } from "./theme";

const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: "night" },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        night: {
          name: "Night",
          value: "#101012",
        },
        black: {
          name: "Black",
          value: "#000000",
        },
        white: {
          name: "White",
          value: "#ffffff",
        },
      },
    },
    docs: {
      theme: theme,
      codePanel: true,
      toc: {
        disable: false,
        title: "Table of Contents",
        contentsSelector: ".sbdocs-content",
        headingSelector: "h1, h2, h3, h4, h5, h6",
        unsafeTocbotOptions: {
          listClass: "toc-list-custom toc-list",
          listItemClass: "toc-list-item-custom toc-list-item",
        },
      },
    },
  },
};

export default preview;
