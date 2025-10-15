import type { Metadata } from "next";

import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "@/components/layout/page";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { getGithubLastEdit } from "fumadocs-core/content/github";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";

function removeFileExtension(slug: string[]) {
  return slug.map((part) => part.replace(/\.(md?|mdx?)$/, ""));
}

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const cleanSlug = removeFileExtension(params.slug ?? []);
  const page = source.getPage(cleanSlug);
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
      editOnGithub={{
        owner: "nickdutto",
        repo: "react-gis",
        path: `apps/docs/content/docs/${page.path}`,
        sha: "main",
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
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
  const cleanSlug = removeFileExtension(params.slug ?? []);
  const page = source.getPage(cleanSlug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
