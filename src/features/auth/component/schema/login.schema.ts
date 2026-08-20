import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type TLoginSchemaInput = z.input<typeof loginSchema>;
export type TLoginSchemaOutput = z.output<typeof loginSchema>;
