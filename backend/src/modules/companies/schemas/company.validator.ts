import { z } from 'zod'

// Constants
const TAX_ID_TYPES = {
  CNPJ: 1,
  CPF: 2,
} as const;

const TAX_ID_LENGTHS = {
  [TAX_ID_TYPES.CNPJ]: 14,
  [TAX_ID_TYPES.CPF]: 11,
} as const;

const VALIDATION_MESSAGES = {
  taxIdType: 'The Tax ID type must be 1 (CNPJ) or 2 (CPF)',
  taxIdLength: 'Invalid tax ID length for the provided type',
  corporateName: 'Corporate name is required',
  email: 'Invalid email format',
  areaCode: 'Phone area code must be 3 characters',
} as const;

const MAX_LENGTHS = {
  corporateName: 100,
  name: 100,
  address: 40,
  addressNumber: 999999,
  addressComplement: 30,
  postalCode: 8,
  neighborhood: 60,
  phone: 14,
} as const;

// Validation helpers
const validateTaxId = (taxIdType: number, taxId: string): boolean => {
  const expectedLength = TAX_ID_LENGTHS[taxIdType as keyof typeof TAX_ID_LENGTHS];
  return expectedLength !== undefined && taxId.length === expectedLength;
};

// Reusable field schemas
const taxIdTypeSchema = z
  .number()
  .int()
  .refine((val) => val === TAX_ID_TYPES.CNPJ || val === TAX_ID_TYPES.CPF, {
    message: VALIDATION_MESSAGES.taxIdType,
  });

const taxIdSchema = z.string();

const emailSchema = z
  .string()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, VALIDATION_MESSAGES.email)
  .optional();

const areaCodeSchema = z
  .string()
  .length(3, VALIDATION_MESSAGES.areaCode)
  .optional();

// Base company schema
const CompanyBaseSchema = z
  .object({
    tax_id_type: taxIdTypeSchema,
    tax_id: taxIdSchema,
    corporate_name: z
      .string({ message: VALIDATION_MESSAGES.corporateName })
      .max(MAX_LENGTHS.corporateName, `Corporate name must be at most ${MAX_LENGTHS.corporateName} characters`),
    name: z
      .string()
      .max(MAX_LENGTHS.name, `Name must be at most ${MAX_LENGTHS.name} characters`)
      .optional(),
    address: z
      .string()
      .max(MAX_LENGTHS.address, `Address must be at most ${MAX_LENGTHS.address} characters`)
      .optional(),
    address_number: z
      .number()
      .min(1)
      .max(MAX_LENGTHS.addressNumber, `Address number must be at most ${MAX_LENGTHS.addressNumber}`)
      .optional(),
    address_complement: z
      .string()
      .max(MAX_LENGTHS.addressComplement, `Address complement must be at most ${MAX_LENGTHS.addressComplement} characters`)
      .optional(),
    postal_code: z
      .string()
      .max(MAX_LENGTHS.postalCode, `Postal code must be at most ${MAX_LENGTHS.postalCode} characters`)
      .optional(),
    neighborhood: z
      .string()
      .max(MAX_LENGTHS.neighborhood, `Neighborhood must be at most ${MAX_LENGTHS.neighborhood} characters`)
      .optional(),
    municipality_code: z.number().optional(),
    area_code: areaCodeSchema,
    phone: z
      .string()
      .max(MAX_LENGTHS.phone, `Phone must be at most ${MAX_LENGTHS.phone} characters`)
      .optional(),
    email: emailSchema,
    created_at: z.date(),
    updated_at: z.date(),
  })
  .refine(
    (data) => validateTaxId(data.tax_id_type, data.tax_id),
    {
      message: VALIDATION_MESSAGES.taxIdLength,
      path: ['tax_id'],
    }
  );

export const CompanySchema = z
  .object({
    company_code: z.number(),
  })
  .extend(CompanyBaseSchema.shape);

export const CreateCompanySchema = CompanyBaseSchema
  .strict()
  .omit({ 
    created_at: true,
    updated_at: true,
  });

export const CompanyUpdateSchema = CompanyBaseSchema
  .partial()
  .refine(
    (data) => {
      // Skip validation if either field is not provided
      if (data.tax_id_type === undefined || data.tax_id === undefined) {
        return true;
      }
      return validateTaxId(data.tax_id_type, data.tax_id);
    },
    {
      message: VALIDATION_MESSAGES.taxIdLength,
      path: ['tax_id'],
    }
  );

// Exported schemas
export type Company = z.infer<typeof CompanySchema>;
export type CreateCompanyDto = z.infer<typeof CreateCompanySchema>;
export type CompanyUpdateDto = z.infer<typeof CompanyUpdateSchema>;