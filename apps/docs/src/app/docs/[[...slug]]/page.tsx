import type { Metadata } from "next";

import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { getGithubLastEdit } from "fumadocs-core/content/github";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const time = await getGithubLastEdit({
    owner: "nickdutto",
    repo: "react-gis",
    path: `apps/docs/content/docs/${page.path}`,
  });

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={time ? new Date(time) : undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <a
          href={`https://github.com/nickdutto/react-gis/blob/main/apps/docs/content/docs/${page.path}`}
          rel="noreferrer noopener"
          target="_blank"
          className="text-fd-secondary-foreground bg-fd-secondary hover:text-fd-accent-foreground hover:bg-fd-accent w-fit rounded-xl border p-2 text-sm font-medium transition-colors"
        >
          Edit on GitHub
        </a>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

// eslint-disable-next-line @typescript-eslint/require-await, react-refresh/only-export-components
export async function generateStaticParams() {
  return source.generateParams();
}

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(props: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
