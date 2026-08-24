import { ReactNode } from "react";

type CreatorLayoutProps = {
  children: ReactNode;
};

export default function CreatorLayout({ children }: CreatorLayoutProps) {
  return (
    <div>
      <header>Creator Header</header>
      <main>{children}</main>
      <footer>Creator Footer</footer>
    </div>
  );
}
