"use client";

import { useTranslations } from "next-intl";
import { creatorSidebarConfig } from ".";
import AppLayout from "../app_layout";
import { SidebarItemType } from "../types";

export default function CreatorAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("layouts.creatorLayout.sidebar");
  const sidebar: ReadonlyArray<SidebarItemType> = creatorSidebarConfig.map(
    (item) => ({
      icon: item.icon,
      href: item.href,
      label: t(item.labelKey),
    }),
  );

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}
