import { z } from "zod";

const validateTaxId = (taxIdType: string, taxId: string): boolean => {
  return (taxIdType === '1' && taxId.length === 14) || (taxIdType === '2' && taxId.length === 11); 
};

// Base company schema
const clientBaseSchema = z
  .object({
    client_id: z
      .number(),
    tax_id_type: z
      .enum(['1', '2']),
    tax_id: z
      .string()
      .trim()
      .transform((val) => val.replace(/\D/g, '')),
    corporate_name: z
      .string({ message: "Corporate name is required." })
      .trim()
      .max(100, "Corporate name cannot exceed 100 characters."),
    name: z
      .string()
      .trim()
      .max(100, "Name cannot exceed 100 characters.")
      .optional(),
    address: z
      .string()
      .trim()
      .max(40, "Address cannot exceed 40 characters.")
      .optional(),
    address_number: z
      .string()
      .min(1, "Name must be at least 1 character long.")
      .max(6, "Address cannot exceed 6 characters.")
      .optional(),
    address_complement: z
      .string()
      .trim()
      .max(30, "Address complement cannot exceed 30 characters.")
      .optional(),
    postal_code: z
      .string()
      .trim()
      .max(8, "Postal code cannot exceed 8 characters.")
      .optional(),
    neighborhood: z
      .string()
      .trim()
      .max(60, "Neighborhood cannot exceed 60 characters.")
      .optional(),
    municipality_id: z
      .number()
      .optional(),
    area_code: z
      .string()
      .trim()
      .length(3, "Area code cannot exceed 3 characters.")
      .optional(),
    phone: z
      .preprocess((number: string) => {
        return number.trim().replace(/\D/g, '')
      }, z.string()
          .min(8, "Phone number must be at least 1 character long.")
          .max(9, "Phone number cannot exceed 9 characters."))
      .optional(),
    email: z
      .email()
      .optional(),
    is_active: z
      .boolean()
      .optional()
      .default(true),
    created_at: z.date(),
    updated_at: z.date(),
  });

// For creating a new client
export const clientCreateSchema = clientBaseSchema
  .strict()
  .omit({
    client_id: true,
    created_at: true,
    updated_at: true,
  })
  .refine(
    (data) => validateTaxId(data.tax_id_type, data.tax_id),
    {
      message: "Invalid tax ID length for the provided type",
      path: ['tax_id'],
    }
  );

// For updating a client
export const clientUpdateSchema = clientBaseSchema
  .partial()
  .omit({
    client_id: true,
    created_at: true,
    updated_at: true,
  });

// Type inference
export type Client = z.infer<typeof clientBaseSchema>;
export type CreateClientDto = z.infer<typeof clientCreateSchema>;
export type UpdateClientDto = z.infer<typeof clientUpdateSchema>;