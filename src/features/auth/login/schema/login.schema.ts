import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.email("メールアドレスを入力してください"),
    password: z
      .string()
      .min(1, "パスワードは必須です")
      .min(8, "パスワードは8文字以上で入力してください"),
    role: z.enum(["learner", "creator", "companyAdmin", "operator"], {
      error: "ロールは必須です",
    }),
  })
  .refine(
    (data) =>
      data.role === "learner" ||
      data.role === "creator" ||
      data.role === "companyAdmin" ||
      data.role === "operator",
    {
      message: "ロールは必須です",
      path: ["role"],
    },
  );

export type TLoginSchemaInput = z.input<typeof loginSchema>;
export type TLoginSchemaOutput = z.output<typeof loginSchema>;
