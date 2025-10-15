import "@/app/global.css";

import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: {
    template: "%s | ReactGIS",
    default: "ReactGIS",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          // Workaround for https://github.com/pacocoursey/next-themes/issues/368
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&s)){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
          data-cfasync="false"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider theme={{ scriptProps: { "data-cfasync": "false" } }}>{children}</RootProvider>
      </body>
    </html>
  );
}
