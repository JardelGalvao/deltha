import { z } from "zod";

export const stateSchema = z.object({
  state_id: z
  .number()
  .int(),

  name: z
  .string()
  .trim()
  .max(255),

  abbreviation: z
  .string()
  .trim()
  .length(2),
});

export type State = z.infer<typeof stateSchema>;
