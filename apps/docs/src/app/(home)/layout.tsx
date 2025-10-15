import { GitHubIcon } from "@/components/icon/github-icon";
import { StorybookIcon } from "@/components/icon/storybook-icon";
import { HomeLayout } from "@/components/layout/home";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      className="boblee3"
      links={[
        { text: "Documentation", url: "/docs" },
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
    </HomeLayout>
  );
}
