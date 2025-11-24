import { z } from "zod";

const departmentBaseSchema = z
    .object({
      department_code: z
        .number()
        .int()
        .positive(),
      company_code: z
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

// For creating a new department (without auto-generated fields)
export const departmentCreateSchema = departmentBaseSchema
.strict()
.omit({
  department_code: true,
  created_at: true,
  updated_at: true,
});

export const departmentUpdateSchema = departmentBaseSchema
  .partial();

// Type inference
export type Department = z.infer<typeof departmentBaseSchema>;
export type CreateDepartmentDto = z.infer<typeof departmentCreateSchema>;
export type UpdateDepartmentDto = z.infer<typeof departmentUpdateSchema>;