import { GitHubIcon } from "@/components/icon/github-icon";
import { StorybookIcon } from "@/components/icon/storybook-icon";
import { DocsLayout } from "@/components/layout/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      links={[
        {
          type: "icon",
          text: "GitHub",
          icon: <GitHubIcon />,
          url: "https://github.com/nickdutto/react-gis",
        },
        {
          type: "icon",
          text: "Storybook",
          icon: <StorybookIcon />,
          url: "https://reactgis-storybook.nickdutto.dev",
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
