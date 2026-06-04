import z from "zod";

export const idDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({
      message: "O id deve ser um número positivo (maior que zero)!",
    }),
});
