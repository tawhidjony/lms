"use client";
import { Fragment } from "react";
import AsideBar from "./aside_bar";
import Header from "./header";
import { SidebarItemType } from "./types";

export default function AppLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: ReadonlyArray<SidebarItemType>;
}) {
  return (
    <Fragment>
      <div
        id="sidebarBackdrop"
        className="fixed inset-0 bg-black/40 z-30 hidden lg:hidden"
      />

      <AsideBar menuItems={sidebar} />
      <div className="lg:pl-64 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </Fragment>
  );
}
