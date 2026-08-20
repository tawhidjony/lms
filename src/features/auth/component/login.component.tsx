"use client";

import { UiForm } from "@/components/form";
import { TOutput } from "@/components/form/ui-form.types";
import { z } from "zod";
import LoginView from "./login.view";

export const schemaLogin = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export default function LoginComponent() {
  const onSubmit = (data: TOutput<typeof schemaLogin>): void => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <UiForm schema={schemaLogin} onSubmit={onSubmit}>
        <LoginView />
      </UiForm>
    </div>
  );
}
