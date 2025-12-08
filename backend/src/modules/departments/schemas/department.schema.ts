import { z } from "zod";

const departmentBaseSchema = z
    .object({
      department_id: z
        .number()
        .int()
        .positive(),
      client_id: z
        .number()
        .int()
        .positive(),
      company_id: z
        .number()
        .int()
        .positive(),
      name: z
        .string()
        .min(1, "Name must be at least 1 character long.")
        .max(100, "Name cannot exceed 100 characters."),
      description: z
        .string()
        .min(1, "Description must be at least 1 character long.")
        .max(255, "Description cannot exceed 100 characters."),
      created_at: z
        .date(),
      updated_at: z
        .date()
});

// For creating a new department (without auto-generated fields)
export const departmentCreateSchema = departmentBaseSchema
.strict()
.omit({
  department_id: true,
  created_at: true,
  updated_at: true,
});

export const departmentUpdateSchema = departmentBaseSchema
  .partial();

// Type inference
export type Department = z.infer<typeof departmentBaseSchema>;
export type CreateDepartmentDto = z.infer<typeof departmentCreateSchema>;
export type UpdateDepartmentDto = z.infer<typeof departmentUpdateSchema>;