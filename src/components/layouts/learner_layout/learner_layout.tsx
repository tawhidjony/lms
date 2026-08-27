"use client";

import { useTranslations } from "next-intl";
import AppLayout from "../app_layout";
import { SidebarItemType } from "../types";
import { learnerSidebar } from ".";

export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("layouts.learnerLayout.sidebar");
  const sidebar: ReadonlyArray<SidebarItemType> = learnerSidebar.map(
    (item) => ({
      icon: item.icon,
      href: item.href,
      label: t(item.labelKey),
    }),
  );

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}
