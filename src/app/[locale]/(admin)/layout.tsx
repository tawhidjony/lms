import AdminAppLayout from "@/components/layouts/admin_layout/admin_layout";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <AdminAppLayout>{children}</AdminAppLayout>;
}
