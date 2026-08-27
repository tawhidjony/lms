import LearnerAppLayout from "@/components/layouts/learner_layout/learner_layout";

type LearnerLayoutProps = {
  children: React.ReactNode;
};

export default function LearnerLayout({ children }: LearnerLayoutProps) {
  return <LearnerAppLayout>{children}</LearnerAppLayout>;
}
