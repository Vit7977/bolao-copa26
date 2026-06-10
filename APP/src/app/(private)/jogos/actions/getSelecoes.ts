"use server"

import { getSelecoes } from "@/src/services/selecao";

export const getSelecoesAction = async () => {
  try {
    const result = await getSelecoes();

    if (!result.success) {
      return {
        success: false,
        message: result.message,
        data: [],
      };
    }

    return {
      success: true,
      message: result.message || "Seleções consultadas com sucesso!",
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