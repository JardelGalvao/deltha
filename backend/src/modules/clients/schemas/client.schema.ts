import { z } from "zod";

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

const taxIdSchema = z
.string()
.trim();

const emailSchema = z
  .string()
  .trim()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, VALIDATION_MESSAGES.email)
  .optional();

const areaCodeSchema = z
  .string()
  .trim()
  .length(3, VALIDATION_MESSAGES.areaCode)
  .optional();

// Base company schema
const clientBaseSchema = z
  .object({
    tax_id_type: taxIdTypeSchema,
    tax_id: taxIdSchema,
    corporate_name: z
      .string({ message: VALIDATION_MESSAGES.corporateName })
      .trim()
      .max(MAX_LENGTHS.corporateName, `Corporate name must be at most ${MAX_LENGTHS.corporateName} characters`),
    name: z
      .string()
      .trim()
      .max(MAX_LENGTHS.name, `Name must be at most ${MAX_LENGTHS.name} characters`)
      .optional(),
    address: z
      .string()
      .trim()
      .max(MAX_LENGTHS.address, `Address must be at most ${MAX_LENGTHS.address} characters`)
      .optional(),
    address_number: z
      .number()
      .min(1)
      .max(MAX_LENGTHS.addressNumber, `Address number must be at most ${MAX_LENGTHS.addressNumber}`)
      .optional(),
    address_complement: z
      .string()
      .trim()
      .max(MAX_LENGTHS.addressComplement, `Address complement must be at most ${MAX_LENGTHS.addressComplement} characters`)
      .optional(),
    postal_code: z
      .string()
      .trim()
      .max(MAX_LENGTHS.postalCode, `Postal code must be at most ${MAX_LENGTHS.postalCode} characters`)
      .optional(),
    neighborhood: z
      .string()
      .trim()
      .max(MAX_LENGTHS.neighborhood, `Neighborhood must be at most ${MAX_LENGTHS.neighborhood} characters`)
      .optional(),
    municipality_code: z
    .number()
    .optional(),
    area_code: areaCodeSchema,
    phone: z
      .string()
      .trim()
      .max(MAX_LENGTHS.phone, `Phone must be at most ${MAX_LENGTHS.phone} characters`)
      .optional(),
    email: emailSchema,
    created_at: z.date(),
    updated_at: z.date(),
  });

export const clientSchema = z
  .object({
    client_code: z
    .number(),
  })
  .extend(clientBaseSchema.shape);

// For creating a new client
export const clientCreateSchema = clientSchema
  .strict()
  .omit({
    client_code: true,
    created_at: true,
    updated_at: true,
  })
  .extend({
    is_active: z.boolean().optional().default(true),
  }).refine(
    (data) => validateTaxId(data.tax_id_type, data.tax_id),
    {
      message: VALIDATION_MESSAGES.taxIdLength,
      path: ['tax_id'],
    }
  );

// For updating a client
export const clientUpdateSchema = clientBaseSchema
  .partial()
  .omit({
    client_code: true,
    created_at: true,
    updated_at: true,
  });

// Type inference
export type Client = z.infer<typeof clientSchema>;
export type CreateClientDto = z.infer<typeof clientCreateSchema>;
export type UpdateClientDto = z.infer<typeof clientUpdateSchema>;

