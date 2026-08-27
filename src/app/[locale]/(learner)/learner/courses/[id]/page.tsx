import CourseDetail from "@/features/learner/course-detail/course-detail";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  return <CourseDetail courseId={id} />;
}
