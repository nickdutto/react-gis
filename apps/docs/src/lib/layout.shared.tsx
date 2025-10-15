import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { GitHubIcon } from "@/components/icon/github-icon";
import { StorybookIcon } from "@/components/icon/storybook-icon";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-label="Logo">
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          ReactGIS
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: "GitHub",
        icon: <GitHubIcon />,
        url: "https://github.com/nickdutto/react-gis",
      },
      {
        text: "Storybook",
        icon: <StorybookIcon />,
        url: "https://reactgis-storybook.nickdutto.dev",
      },
    ],
  };
}
