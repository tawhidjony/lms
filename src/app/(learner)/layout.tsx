type LernerLayoutProps = {
  children: React.ReactNode;
};

export default function LearnerLayout({ children }: LernerLayoutProps) {
  return (
    <div>
      <header>Learner Header</header>
      <main>{children}</main>
      <footer>Learner Footer</footer>
    </div>
  );
}
