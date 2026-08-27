import { redirect } from "@/i18n/navigation";

export default function OperatorPage() {
  return redirect({ href: "/operator/dashboard", locale: "ja" });
}
