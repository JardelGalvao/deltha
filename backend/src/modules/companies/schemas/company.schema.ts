import { z } from "zod";

// Validation helpers
const validateTaxId = (taxIdType: string, taxId: string): boolean => {
  return (taxIdType === '1' && taxId.length === 14) || (taxIdType === '2' && taxId.length === 11); 
};

// Base company schema
const companyBaseSchema = z
  .object({
     company_id: z
      .number(),
    tax_id_type: z
      .enum(['1', '2']),
    tax_id: z
      .string()
      .trim()
      .transform(data => data.trim().replace(/\D/g, '')),
    client_id: z
      .number()
      .int()
      .positive(),
    corporate_name: z
      .string({message: "Corporate name is required."})
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
      .min(1, "Address number must be at least 1 character long.")
      .max(6, "Address number cannot exceed 6 characters.")
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
      .length(3, "Area code has to have 3 characters.")
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
    created_at: z
      .date(),
    updated_at: z
      .date(),
  });

export const companyCreateSchema = companyBaseSchema
  .strict()
  .omit({ 
    company_id: true,
    created_at: true,
    updated_at: true,
  })
  .refine(
    (data) => validateTaxId(data.tax_id_type, data.tax_id),
    {
      message: "Invalid tax ID length for the provided type.",
      path: ['tax_id'],
    }
  );

export const companyUpdateSchema = companyBaseSchema
  .partial()
  .omit({ 
    company_id: true,
    created_at: true,
    updated_at: true,
  })
  .refine(
    (data) => {
      if (data.tax_id_type === undefined || data.tax_id === undefined) {
        return true;
      }
      return validateTaxId(data.tax_id_type, data.tax_id);
    },
    {
      message: "Invalid tax ID length for the provided type.",
      path: ['tax_id'],
    }
  );

// Exported schemas
export type Company = z.infer<typeof companyBaseSchema>;
export type CreateCompanyDto = z.infer<typeof companyCreateSchema>;
export type CompanyUpdateDto = z.infer<typeof companyUpdateSchema>;