import PackageFormComponent from "@/features/operator/package/form/package.form.component";

type EditPackagePageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPackagePage({ params }: EditPackagePageProps) {
  const { id } = await params;

  return <PackageFormComponent packageId={id} />;
}
