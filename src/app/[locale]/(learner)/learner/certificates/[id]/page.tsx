import Certificate from "@/features/learner/certificate/certificate";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CertificatePage({ params }: Props) {
  const { id } = await params;
  return <Certificate courseId={id} />;
}
