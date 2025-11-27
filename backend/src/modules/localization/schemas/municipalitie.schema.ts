import { z } from "zod";

export const municipalitySchema = z.object({
  municipality_id: z
  .number()
  .int(),

  name: z
  .string()
  .trim()
  .max(255),

  ibge_code: z
  .string()
  .trim()
  .optional(),

  state_id: z
  .string()
  .trim()
  .optional(),
});

export type Municipality = z.infer<typeof municipalitySchema>;