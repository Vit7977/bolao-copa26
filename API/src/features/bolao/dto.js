import z from "zod";

const bolaoSchema = z.object({
  usuario: z.coerce
    .number()
    .int({ message: "O usuário deve ser um número inteiro!" })
    .positive({ message: "O usuário deve ser um número positivo!" }),

  jogo: z.coerce
    .number()
    .int({ message: "O jogo deve ser um número inteiro!" })
    .positive({ message: "O jogo deve ser um número positivo!" }),

  palpite1: z.coerce
    .number()
    .int({ message: "O palpite da seleção 1 deve ser um número inteiro!" })
    .nonnegative({
      message: "O palpite da seleção 1 não pode ser negativo!",
    })
    .max(20, {
      message: "O palpite da seleção 1 não pode ser maior que 20!",
    }),

  palpite2: z.coerce
    .number()
    .int({ message: "O palpite da seleção 2 deve ser um número inteiro!" })
    .nonnegative({
      message: "O palpite da seleção 2 não pode ser negativo!",
    })
    .max(20, {
      message: "O palpite da seleção 2 não pode ser maior que 20!",
    }),
});

export const createBolaoDTO = bolaoSchema;

export const idDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({
      message: "O id deve ser um número positivo (maior que zero)!",
    }),
});
