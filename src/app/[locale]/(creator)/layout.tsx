import CreatorAppLayout from "@/components/layouts/creator_layout/operator_layout";
import { ReactNode } from "react";

type CreatorLayoutProps = {
  children: ReactNode;
};

export default function CreatorLayout({ children }: CreatorLayoutProps) {
  return <CreatorAppLayout>{children}</CreatorAppLayout>;
}
