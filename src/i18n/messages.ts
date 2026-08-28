import common from "@/messages/en/common.json";
import navigation from "@/messages/en/navigation.json";
import validation from "@/messages/en/validation.json";

import layouts from "@/components/layouts/messages/en.json";
import auth from "@/features/auth/login/messages/en.json";
import learnerDashboard from "@/features/learner/dashboard/messages/en.json";
import operatorDashboard from "@/features/operator/dashboard/messages/en.json";
import operatorPackages from "@/features/operator/package/messages/en.json";
import operatorTenant from "@/features/operator/tenant/messages/en.json";
import operatorContracts from "@/features/operator/contracts/messages/en.json";

export const messages = {
  ...common,
  ...navigation,
  ...validation,
  ...auth,
  ...layouts,
  ...learnerDashboard,
  ...operatorDashboard,
  ...operatorPackages,
  ...operatorTenant,
  ...operatorContracts,
} as const;
