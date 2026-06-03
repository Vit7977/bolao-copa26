import z from "zod";

export const createUserDTO = z.object({
  nome: z
    .string()
    .trim()
    .min(3, { message: "O nome de usuário deve conter ao menos 3 caracteres!" })
    .max(30, {
      message: "O máximo de caracteres para nome de usuário é de 30!",
    }),
  email: z.email({ message: "O email deve ser válido!" }),
  senha: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres!" })
    .regex(/^(?=.*[A-Z])(?=.*\d).+$/, {
      message:
        "A senha deve conter pelo menos uma letra maiúscula e um número!",
    }),
});

export const updateUserDTO = createUserDTO.partial();

export const loginDTO = z.object({
  email: z.email({ message: "O email deve ser válido!" }),
  senha: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres!" })
    .regex(/^(?=.*[A-Z])(?=.*\d).+$/, {
      message:
        "A senha deve conter pelo menos uma letra maiúscula e um número!",
    }),
});

export const idDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({
      message: "O id deve ser um número positivo (maior que zero)!",
    }),
});
