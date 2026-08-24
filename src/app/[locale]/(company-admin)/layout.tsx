type CompanyAdminLayoutProps = {
  children: React.ReactNode;
};

export default function CompanyAdminLayout({
  children,
}: CompanyAdminLayoutProps) {
  return (
    <div>
      <header>Company Admin Header</header>
      <main>{children}</main>
      <footer>Company Admin Footer</footer>
    </div>
  );
}
