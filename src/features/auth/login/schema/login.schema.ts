import { Messages } from "next-intl";
import { z } from "zod";

export const createLoginSchema = (messages: Messages) => {
  return z.object({
    email: z.email(messages.Auth.loginValidation.email.required),
    password: z
      .string()
      .min(1, messages.Auth.loginValidation.password.required)
      .min(8, messages.Auth.loginValidation.password.min),
    role: z.enum(["learner", "creator", "companyAdmin", "operator"], {
      error: messages.Auth.loginValidation.role.required,
    }),
  });
};

export type TLoginSchema = ReturnType<typeof createLoginSchema>;
export type TLoginSchemaInput = z.input<TLoginSchema>;
export type TLoginSchemaOutput = z.output<TLoginSchema>;
