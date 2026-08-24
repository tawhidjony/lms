import { z } from "zod";
import type { LoginLangMessages } from "../lang/login";

type LoginValidation = LoginLangMessages["validation"];

export const createLoginSchema = (validation: LoginValidation) =>
  z.object({
    email: z.email(validation.email.required),
    password: z
      .string()
      .min(1, validation.password.required)
      .min(8, validation.password.min),
    role: z.enum(["learner", "creator", "companyAdmin", "operator"], {
      error: validation.role.required,
    }),
  });

export type TLoginSchema = ReturnType<typeof createLoginSchema>;
export type TLoginSchemaInput = z.input<TLoginSchema>;
export type TLoginSchemaOutput = z.output<TLoginSchema>;
