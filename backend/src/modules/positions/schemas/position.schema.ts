import { z } from "zod";

export const positionBaseSchema = z.object({
  position_code: z
    .number()
    .int()
    .positive(),
  company_code: z
    .number()
    .int()
    .positive(),
  department_code: z
    .number()
    .int()
    .positive(),
  name: z
    .string()
    .min(1)
    .max(100),
  description: z
    .string()
    .min(1)
    .max(255),
  created_at: z
    .date(),
  updated_at: z
    .date()
});

export const positionCreateSchema = positionBaseSchema
  .strict()
  .omit({
    position_code: true,
    created_at: true,
    updated_at: true,
  });

export const positionUpdateSchema = positionBaseSchema
  .partial()
  .omit({
    position_code: true,
    created_at: true,
    updated_at: true,
  });

  export type Position = z.infer<typeof positionBaseSchema>;
  export type CreatePositionDto = z.infer<typeof positionCreateSchema>;
  export type UpdatePositionDto = z.infer<typeof positionUpdateSchema>;