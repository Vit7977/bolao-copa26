import * as response from "../../utils/response.js";
import GrupoSelecaoService from "./service.js";

const GrupoSelecaoController = {
  async getById(req, res) {
    try {
      const { id } = req.params;
      const data = await GrupoSelecaoService.getById(id);

      if (!data) {
        return response.notFound(res, {
          message: "Seleção em grupo não encontrada!",
        });
      }

      return response.success(res, {
        message: "Seleção em grupo consultada com sucesso!",
        data,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async getAll(_, res) {
    try {
      const data = await GrupoSelecaoService.getAll();
      return response.success(res, {
        message: "Seleções em grupo consultadas com sucesso!",
        data,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },
};

export default GrupoSelecaoController;
