import { z } from "zod";

const pageSchema = z.preprocess((value) => {
  if (value === undefined) {
    return 1;
  }

  const number = Number(value);

  if (Number.isInteger(number) && number > 0) {
    return number;
  }

  return 1;
}, z.number().int().positive());

const limitSchema = z.preprocess((value) => {
  if (value === undefined) {
    return 10;
  }

  const number = Number(value);

  if (Number.isInteger(number) && number > 0) {
    return number;
  }

  return 10;
}, z.number().int().positive());

export const scenariosFilterSchema = z.object({
  page: pageSchema,
  limit: limitSchema,
  search: z.string().trim().default(""),
});

export type ScenariosFilterSchema = z.infer<typeof scenariosFilterSchema>;
