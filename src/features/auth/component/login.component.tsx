"use client";

import { UiForm } from "@/components/form";
import { TUiFormRef } from "@/components/form/ui-form.types";
import { useRef } from "react";
import { loginDefaultValues } from "../type/login.type";
import LoginView from "./login.view";
import {
  loginSchema,
  TLoginSchemaInput,
  TLoginSchemaOutput,
} from "./schema/login.schema";

export default function LoginComponent() {
  const formRef = useRef<TUiFormRef<TLoginSchemaInput>>(null);
  const onSubmit = async (data: TLoginSchemaOutput): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
