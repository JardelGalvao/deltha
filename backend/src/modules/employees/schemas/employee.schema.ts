import strict from "assert/strict";
import { z } from "zod";

export const employeeBaseSchema = z.object({
  employee_code: z
    .number()
    .int()
    .positive(),
  department_code: z
    .int()
    .positive(),
  municipality_code: z
    .number()
    .int()
    .positive()
    .nullable(),
  position_code: z
    .int()
    .positive(),
  first_name: z
    .string()
    .min(1)
    .max(100),
  last_name: z
    .string()
    .min(1)
    .max(100),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
    .max(255),
  phone: z
    .string()
    .max(20)
    .nullable()
    .optional(),
  date_of_birth: z
    .coerce.date()
    .nullable()
    .optional(),
  hire_date: z
    .coerce.date(),
  termination_date: z
    .date()
    .nullable()
    .optional(),
  salary: z
    .number()
    .positive()
    .multipleOf(0.01),
  is_active: z
    .boolean()
    .default(true),
  address: z
    .string()
    .max(255)
    .nullable(),
  address_number: z
    .string()
    .max(20)
    .nullable(),
  address_complement: z
    .string()
    .max(100)
    .nullable(),
  postal_code: z
    .string()
    .max(20)
    .nullable(),
  neighborhood: z
    .string()
    .max(100)
    .nullable(),
  area_code: z
    .number()
    .int()
    .positive()
    .nullable(),
  national_id: z
    .string()
    .max(20),
  created_at: z
    .date(),
  updated_at: z
    .date()
});

// For creating a new employee (without auto-generated fields)
export const employeeCreateSchema = employeeBaseSchema
.strict()
.omit({
  employee_code: true,
  created_at: true,
  updated_at: true,
}).extend({
  is_active: z.boolean().optional().default(true),
});

// For updating an employee (all fields optional except employee_code)
export const employeeUpdateSchema = employeeBaseSchema.partial().omit({
  // employee_code: true,
});

// Type inference
export type Employee = z.infer<typeof employeeBaseSchema>;
export type CreateEmployeeDto = z.infer<typeof employeeCreateSchema>;
export type UpdateEmployeeDto = z.infer<typeof employeeUpdateSchema>;