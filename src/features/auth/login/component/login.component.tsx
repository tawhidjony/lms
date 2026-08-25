"use client";

import { UiForm } from "@/components/form";
import { TUiFormRef } from "@/components/form/ui-form.types";
import { useRouter } from "@/i18n/navigation";
import { useRef } from "react";
import {
  loginSchema,
  TLoginSchemaInput,
  TLoginSchemaOutput,
} from "../schema/login.schema";
import { loginDefaultValues } from "../type/login.type";
import LoginView from "./login.view";

export default function LoginComponent() {
  const router = useRouter();
  const formRef = useRef<TUiFormRef<TLoginSchemaInput>>(null);
  const onSubmit = async (data: TLoginSchemaOutput): Promise<void> => {
    switch (data.role) {
      case "learner":
        router.push("/learner");
        break;
      case "creator":
        router.push("/creator");
        break;
      case "companyAdmin":
        router.push("/company-admin");
        break;
      case "operator":
        router.push("/operator");
        break;
    }
    formRef.current?.reset();
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <UiForm<TLoginSchemaInput, TLoginSchemaOutput>
        schema={loginSchema}
        defaultValues={loginDefaultValues}
        onSubmit={onSubmit}
        ref={formRef}
      >
        <LoginView />
      </UiForm>
    </div>
  );
}
