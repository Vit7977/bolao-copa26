import * as response from "../../utils/response.js";
import SelecaoService from "./service.js";

const SelecaoController = {
  async create(req, res) {
    try {
      await SelecaoService.create(req.body);
      return response.created(res, {
        message: "Seleção criada com sucesso!",
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const selecao = await SelecaoService.getById(id);

      if (!selecao) {
        return response.notFound(res, {
          message: "Seleção não encontrada!",
        });
      }

      await SelecaoService.update(id, req.body);
      return response.success(res, {
        message: "Seleção atualizada com sucesso!",
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const selecao = await SelecaoService.getById(id);

      if (!selecao) {
        return response.notFound(res, {
          message: "Seleção não encontrada!",
        });
      }

      await SelecaoService.delete(id);
      return response.success(res, {
        message: "Seleção deletada com sucesso!",
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const selecao = await SelecaoService.getById(id);

      if (!selecao) {
        return response.notFound(res, {
          message: "Seleção não encontrada!",
        });
      }

      return response.success(res, {
        message: "Seleção consultada com sucesso!",
        data: selecao,
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
      const selecoes = await SelecaoService.getAll();

      return response.success(res, {
        message: "Seleções consultadas com sucesso!",
        data: selecoes,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },
};

export default SelecaoController;
