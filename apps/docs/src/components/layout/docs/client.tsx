"use client";

import type { ComponentProps } from "react";

import { usePathname } from "fumadocs-core/framework";
import Link from "fumadocs-core/link";
import { useNav } from "fumadocs-ui/contexts/layout";
import { useSidebar } from "fumadocs-ui/contexts/sidebar";
import { Sidebar as SidebarIcon } from "lucide-react";
import { useMemo } from "react";

import type { Option } from "../../root-toggle";

import { cn } from "../../../lib/cn";
import { isTabActive } from "../../../lib/is-active";
import { buttonVariants } from "../../ui/button";

export function Navbar({ mode, ...props }: ComponentProps<"header"> & { mode: "top" | "auto" }) {
  const { open, collapsed } = useSidebar();
  const { isTransparent } = useNav();

  return (
    <header
      id="nd-subnav"
      {...props}
      className={cn(
        "fixed top-(--fd-banner-height) right-(--removed-body-scroll-bar-size,0) left-0 z-10 flex h-(--fd-nav-height) flex-col px-(--fd-layout-offset) backdrop-blur-sm transition-colors",
        (!isTransparent || open) && "bg-fd-background/80",
        mode === "auto" &&
          !collapsed &&
          "ps-[calc(var(--fd-layout-offset)+var(--fd-sidebar-width))]",
        props.className,
      )}
    >
      {props.children}
    </header>
  );
}

export function LayoutBody(props: ComponentProps<"main">) {
  const { collapsed } = useSidebar();

  return (
    <main
      id="nd-docs-layout"
      {...props}
      className={cn(
        "fd-notebook-layout flex flex-1 flex-col pt-(--fd-nav-height) transition-[padding]",
        !collapsed && "mx-(--fd-layout-offset)",
        props.className,
      )}
      style={{
        ...props.style,
        paddingInlineStart: collapsed
          ? "min(calc(100vw - var(--fd-page-width)), var(--fd-sidebar-width))"
          : "var(--fd-sidebar-width)",
      }}
    >
      {props.children}
    </main>
  );
}

export function NavbarSidebarTrigger({ className, ...props }: ComponentProps<"button">) {
  const { setOpen } = useSidebar();

  return (
    <button
      {...props}
      className={cn(
        buttonVariants({
          color: "ghost",
          size: "icon-sm",
          className,
        }),
      )}
      onClick={() => setOpen((prev) => !prev)}
    >
      <SidebarIcon />
    </button>
  );
}

export function LayoutTabs({
  options,
  ...props
}: ComponentProps<"div"> & {
  options: Option[];
}) {
  const pathname = usePathname();
  const selected = useMemo(() => {
    return options.reverse().find((option) => isTabActive(option, pathname));
  }, [options, pathname]);

  return (
    <div {...props} className={cn("flex flex-row items-end gap-6 overflow-auto", props.className)}>
      {options.map((option) => (
        <LayoutTab key={option.url} selected={selected === option} option={option} />
      ))}
    </div>
  );
}

function LayoutTab({
  option: { title, url, unlisted, props },
  selected = false,
}: {
  option: Option;
  selected?: boolean;
}) {
  return (
    <Link
      href={url}
      {...props}
      className={cn(
        "text-fd-muted-foreground hover:text-fd-accent-foreground inline-flex items-center gap-2 border-b-2 border-transparent pb-1.5 text-sm font-medium text-nowrap transition-colors",
        unlisted && !selected && "hidden",
        selected && "border-fd-primary text-fd-primary",
        props?.className,
      )}
    >
      {title}
    </Link>
  );
}
