import ScenariosDetailComponent from "@/features/creator/scenarios/detail/scenarios.detail.component";
import { Suspense } from "react";

export default function ScenarioDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScenariosDetailComponent />
    </Suspense>
  );
}
