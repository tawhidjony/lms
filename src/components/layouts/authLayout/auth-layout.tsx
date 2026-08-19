type AuthLayout = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayout) {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4 font-sans">
      {children}
    </div>
  );
}
