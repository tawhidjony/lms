"use client";

import { useTranslations } from "next-intl";
import { operatorSidebarConfig } from ".";
import AppLayout from "../app_layout";
import { SidebarItemType } from "../types";

export default function OperatorAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("layouts.operatorLayout.sidebar");
  const sidebar: ReadonlyArray<SidebarItemType> = operatorSidebarConfig.map(
    (item) => ({
      icon: item.icon,
      href: item.href,
      label: t(item.labelKey),
    }),
  );

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}
