import z from "zod";

export const createSelecaoDTO = z.object({
  nome: z.string().trim().min(1, { message: "Nome da seleção é obrigatório!" }),
  bandeira_url: z
    .string()
    .trim()
    .min(1, { message: "A bandeira é obrigatória!" })
    .pipe(z.url({ message: "A bandeira deve ser uma URL válida!" })),
});

export const updateSelecaoDTO = createSelecaoDTO.partial();

export const idDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({
      message: "O id deve ser um número positivo (maior que zero)!",
    }),
});
