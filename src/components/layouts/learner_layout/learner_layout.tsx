"use client";

import { learnerLayoutLang, useLang } from "@/lang";
import { learnerSidebar } from ".";
import AppLayout from "../app_layout";

export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLang();
  const t = learnerLayoutLang[locale];
  const sidebar = learnerSidebar.map(({ icon, href, labelKey }) => ({
    icon,
    href,
    label: t[labelKey],
  }));

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}
