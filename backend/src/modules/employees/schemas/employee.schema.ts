import strict from "assert/strict";
import { z } from "zod";

export const employeeBaseSchema = z.object({
  employee_id: z
    .number()
    .int()
    .positive(),
  client_id: z
    .number()
    .int()
    .positive(),
  company_id: z
    .int()
    .positive(),
  department_id: z
    .number()
    .int()
    .positive(),
  municipality_id: z
    .number()
    .int()
    .positive()
    .nullable(),
  position_id: z
    .number()
    .int()
    .positive(),
  first_name: z
    .string()
    .min(1, "First name must be at least 1 character long.")
    .max(100, "First name cannot exceed 100 characters."),
  last_name: z
    .string()
    .min(1, "Last name must be at least 1 character long.")
    .max(100, "Last name cannot exceed 100 characters."),
  email: z
    .email()
    .optional(),
  phone: z
    .preprocess((number: string) => {
      return number.trim().replace(/\D/g, '')
    }, z.string()
        .min(8, "Phone number must be at least 1 character long.")
        .max(9, "Phone number cannot exceed 9 characters."))
    .optional(),
  date_of_birth: z
    .coerce.date()
    .optional(),
  hire_date: z
    .coerce.date(),
  termination_date: z
    .date()
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
    .max(255, "Address cannot exceed 255 characters.")
    .optional(),
  address_number: z
    .string()
    .max(6, "Address Number cannot exceed 6 characters."),
  address_complement: z
    .string()
    .max(100, "Address complement cannot exceed 100 characters."),
  postal_code: z
    .preprocess((number: string) => {
      return number.trim().replace(/\D/g, '')
    }, z.string()
        .length(8, "Postal code has to have 8 characters"))
    .optional(),
  neighborhood: z
    .string()
    .max(100, "Neighborhood complement cannot exceed 100 characters.")
    .optional(),
  area_code: z
    .string()
    .trim()
    .length(3, "Area code has to have 3 characters.")
    .optional(),
  national_id: z
    .string()
    .trim()
    .transform(data => data.trim().replace(/\D/g, '')),
  created_at: z
    .date(),
  updated_at: z
    .date()
});

// For creating a new employee
export const employeeCreateSchema = employeeBaseSchema
  .strict()
  .omit({
    employee_id: true,
    created_at: true,
    updated_at: true,
  })
  .extend({
    is_active: z
      .boolean()
      .optional()
      .default(true),
  });

// For updating an employee
export const employeeUpdateSchema = employeeBaseSchema
  .partial()
  .omit({
    employee_id: true,
    created_at: true,
    updated_at: true,
  });

// Type inference
export type Employee = z.infer<typeof employeeBaseSchema>;
export type CreateEmployeeDto = z.infer<typeof employeeCreateSchema>;
export type UpdateEmployeeDto = z.infer<typeof employeeUpdateSchema>;