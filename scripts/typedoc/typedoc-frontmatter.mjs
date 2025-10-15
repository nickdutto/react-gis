// @ts-check
import { MarkdownPageEvent } from "typedoc-plugin-markdown";

/**
 * @param {string} pathString
 * @returns {string}
 */
function getFilename(pathString) {
  const lastSegment = pathString.split("/").pop()?.split("\\").pop();

  if (!lastSegment) {
    return pathString;
  }

  const parts = lastSegment.split(".");

  if (parts.length > 1) {
    parts.pop();
  }

  return parts.join(".");
}

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(
    MarkdownPageEvent.BEGIN,
    /** @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page */
    (page) => {
      const fullName = page.model?.name;

      if (fullName) {
        let desiredTitle = getFilename(fullName);
        if (desiredTitle === "openlayers") {
          desiredTitle = "API Reference";
          page.frontmatter = {
            title: desiredTitle,
            icon: "CodeXml",
            ...page.frontmatter,
          };
        }

        page.frontmatter = {
          title: desiredTitle,
          ...page.frontmatter,
        };
      }
    },
  );
}
