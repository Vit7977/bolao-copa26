"use server"
import { createJogo } from "@/src/services/jogo";

export const createJogoAction = async (formData: FormData) => {
  try {
    const data = {
      selecao1: Number(formData.get("selecao1")),
      selecao2: Number(formData.get("selecao2")),
      fase: formData.get("fase") as string,
      data: formData.get("data") as string,
    };

    const result = await createJogo(data);

    if (!result.success) {
      return {
        success: false,
        message: result.message,
      };
    }

    return {
      success: true,
      message: result.message || "Jogo criado com sucesso!",
    };
  } catch (error) {
    return {
      success: false,
      message: error || "Erro interno no servidor!",
    };
  }
};
