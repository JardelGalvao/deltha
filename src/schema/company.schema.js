import { z } from "zod";

export const companySchema = z.object({
  tipo_inscricao: z.number().int().refine((val) => val === 1 || val === 2, {
    message: "O tipo de inscrição deve ser 1 ou 2",
  }),
  inscricao: z.string(),
  razao_social: z.string().max(255, "Razão social deve conter no máximo 255 caracteres"),
  nome: z.string().max(255, "Nome deve conter no máximo 255 caracteres").optional(),
  endereco: z.string().max(40, "Endereco deve conter no máximo 40 caracteres").optional(),
  numero_endereco: z.number().optional(),
  complemento_endereco: z.string().max(30, "Complemento endereco deve conter no máximo 30 caracteres").optional(),
  cep: z.string().max(8, "CEP deve conter no máximo 8 caracteres").optional(),
  bairro: z.string().max(60, "Bairro deve conter no máximo 60 caracteres").optional(),
  codigo_municipio: z.number().optional(),
  ddd: z.string().max(3, "DDD do telefone deve conter no máximo 3 caracteres").optional(),
  telefone: z.string().max(14, "Telefone deve conter no máximo 14 caracteres").optional(),
  email: z.string().email("Formato de e-mail inválido")
}).refine((data) => {
  if (data.tipo_inscricao === 1) {
    return data.inscricao.length === 14;
  } else if (data.tipo_inscricao === 2) {
    return data.inscricao.length === 11;
  }
  return false;
}, {
  message: "Comprimento inválido da inscrição para o tipo de inscrição fornecido",
  path: ["inscricao"],
});