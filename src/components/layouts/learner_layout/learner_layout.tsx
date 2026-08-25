"use client";

import { useMessages } from "next-intl";
import { learnerSidebar } from ".";
import AppLayout from "../app_layout";

export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = useMessages();
  const t = messages.LearnerLayout;
  const sidebar = learnerSidebar.map(({ icon, href, labelKey }) => ({
    icon,
    href,
    label: t(labelKey),
  }));

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}
