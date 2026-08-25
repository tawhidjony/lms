import common from "@/messages/en/common.json";
import navigation from "@/messages/en/navigation.json";
import validation from "@/messages/en/validation.json";

import layouts from "@/components/layouts/messages/en.json";
import auth from "@/features/auth/login/messages/en.json";

export const messages = {
  ...common,
  ...navigation,
  ...validation,
  ...auth,
  ...layouts,
} as const;
