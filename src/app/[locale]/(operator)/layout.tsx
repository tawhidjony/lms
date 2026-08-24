type OpaeratorLayoutProps = {
  children: React.ReactNode;
};

export default function OperatorLayout({ children }: OpaeratorLayoutProps) {
  return (
    <div>
      <header>Operator Header</header>
      <main>{children}</main>
      <footer>Operator Footer</footer>
    </div>
  );
}
