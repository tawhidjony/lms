import { redirect } from "@/i18n/navigation";

export default function LearnerPage() {
  return redirect({ href: "/learner/dashboard", locale: "ja" });
}
