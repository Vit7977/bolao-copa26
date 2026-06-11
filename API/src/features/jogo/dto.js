import z from "zod";

const jogoSchema = z.object({
  selecao1: z.coerce
    .number()
    .int({ message: "Seleção 1 deve ser um número inteiro!" })
    .positive({ message: "Seleção 1 deve ser um número positivo!" }),

  selecao2: z.coerce
    .number()
    .int({ message: "Seleção 2 deve ser um número inteiro!" })
    .positive({ message: "Seleção 2 deve ser um número positivo!" }),

  fase: z.enum(["grupos", "16 avos", "oitavas", "quartas", "semifinal", "final"]),

  data: z.coerce.date(),

  selecao1_gols: z.coerce
    .number()
    .int({ message: "Os gols da seleção 1 devem ser um número inteiro!" })
    .nonnegative({ message: "Os gols não podem ser negativos" })
    .optional(),

  selecao2_gols: z.coerce
    .number()
    .int({ message: "Os gols da seleção 2 devem ser um número inteiro!" })
    .nonnegative({ message: "Os gols não podem ser negativos" })
    .optional(),
});

export const createJogoDTO = jogoSchema.refine(
  (data) => data.selecao1 !== data.selecao2,
  {
    message: "As seleções devem ser diferentes!",
    path: ["selecao2"],
  },
);

export const updateJogoDTO = jogoSchema
  .partial()
  .refine(
    (data) =>
      data.selecao1 === undefined ||
      data.selecao2 === undefined ||
      data.selecao1 !== data.selecao2,
    {
      message: "As seleções devem ser diferentes!",
      path: ["selecao2"],
    },
  );

export const idDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({
      message: "O id deve ser um número positivo (maior que zero)!",
    }),
});
