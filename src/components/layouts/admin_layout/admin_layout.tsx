"use client";

import { useTranslations } from "next-intl";
import { adminSidebarConfig } from ".";
import AppLayout from "../app_layout";
import { SidebarItemType } from "../types";

export default function AdminAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("layouts.adminLayout.sidebar");
  const sidebar: ReadonlyArray<SidebarItemType> = adminSidebarConfig.map(
    (item) => ({
      icon: item.icon,
      href: item.href,
      label: t(item.labelKey),
    }),
  );

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}
