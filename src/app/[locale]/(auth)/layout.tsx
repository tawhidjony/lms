import AuthLayout from "@/components/layouts/authLayout/auth-layout";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
