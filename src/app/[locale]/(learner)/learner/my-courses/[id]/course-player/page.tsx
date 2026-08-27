import CoursePlayer from "@/features/learner/course-player/course-player";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CoursePlayerPage({ params }: Props) {
  const { id } = await params;
  return <CoursePlayer />;
}
