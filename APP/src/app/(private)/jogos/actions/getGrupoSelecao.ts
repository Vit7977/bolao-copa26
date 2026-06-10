import { getGrupos } from "@/src/services/grupo";
import { getGrupoSelecao } from "@/src/services/grupo_selecao";

export const getGrupoSelecaoAction = async () => {
  try {
    const result = await getGrupoSelecao();

    if (!result.success) {
      return {
        success: false,
        message: result.message,
        data: [],
      };
    }

    return {
      success: true,
      message: result.message || "Grupo_selecao consultados com sucesso!",
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

export const getGruposAction = async () => {
  try {
    const result = await getGrupos();

    if (!result.success) {
      return {
        success: false,
        message: result.message,
        data: [],
      };
    }

    return {
      success: true,
      message: result.message || "Grupos consultados com sucesso!",
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