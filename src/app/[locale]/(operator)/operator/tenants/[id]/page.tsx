import TenantDetailComponent from "@/features/operator/tenant/detail/tenant.detail.component";
import { Suspense } from "react";

export default function TenantDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TenantDetailComponent />
    </Suspense>
  );
}
