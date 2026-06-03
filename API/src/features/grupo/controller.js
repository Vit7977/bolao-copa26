import GrupoService from "./service.js";
import * as response from "../../utils/response.js";

const GrupoController = {
  async getById(req, res) {
    try {
      const { id } = req.params;
      const grupo = await GrupoService.getById(id);

      if (!grupo) {
        return response.notFound(res, { message: "Grupo não encontrado!" });
      }

      return response.success(res, {
        message: "Grupo consultado com sucesso!",
        data: grupo,
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
      const grupos = await GrupoService.getAll();

      return response.success(res, {
        message: "Grupos consultados com sucesso!",
        data: grupos,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },
};

export default GrupoController;
