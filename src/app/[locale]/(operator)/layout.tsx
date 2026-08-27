import OperatorAppLayout from "@/components/layouts/operator_layout/operator_layout";

type OperatorLayoutProps = {
  children: React.ReactNode;
};

export default function OperatorLayout({ children }: OperatorLayoutProps) {
  return <OperatorAppLayout>{children}</OperatorAppLayout>;
}
