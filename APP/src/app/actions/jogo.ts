"use server"
import { getJogoById, getJogos } from "@/src/services/jogo";
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


export const getJogosAction = async () => {
  try {
    const result = await getJogos();

    if (!result.success) {
      return {
        success: false,
        message: result.message,
        data: [],
      };
    }

    return {
      success: true,
      message: result.message || "Jogos consultados com sucesso!",
      data: result.data,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro interno no servidor";

    return {
      success: false,
      message,
      data: [],
    };
  }
};

export const getJogoByIdAction = async (id:number) => {
  try {
    const result = await getJogoById(id);

    if (!result.success) {
      return {
        success: false,
        message: result.message,
        data: null,
      };
    }

    return {
      success: true,
      message: result.message || "Jogo consultado com sucesso!",
      data: result.data,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro interno no servidor";

    return {
      success: false,
      message,
      data: null,
    };
  }
};