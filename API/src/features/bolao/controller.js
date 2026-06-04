import BolaoService from "./service.js";
import * as response from "../../utils/response.js";

const BolaoController = {
  async create(req, res) {
    try {
      await BolaoService.create(req.body);
      return response.created(res, {
        message: "Bolão criado com sucesso!",
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async updatePontuacao(req, res) {
    try {
      const { id } = req.params;

      const result = await BolaoService.updatePontuacao(id);
      return response.success(res, {
        message: "Pontuação dos bolões atualizadas!",
        data: result,
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
      const bolao = await BolaoService.getById(id);

      if (!bolao) {
        return response.notFound(res, {
          message: "Bolão não encontrado!",
        });

        await BolaoService.delete(id);
        return response.success(res, {
          message: "Bolão deletado com sucesso!",
        });
      }
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
      const bolao = await BolaoService.getById(id);

      if (!bolao) {
        return response.notFound(res, {
          message: "Bolão não encontrado!",
        });

        return response.success(res, {
          message: "Bolão consultado com sucesso!",
          data: bolao,
        });
      }
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async getByUser(req, res) {
    try {
      const { id } = req.params;
      const boloes = await BolaoService.getByUser(id);

      if (!boloes.length) {
        return response.notFound(res, {
          message: "Bolões não encontrados!",
        });
      }
      
      return response.success(res, {
        message: "Bolões consultados com sucesso!",
        data: boloes,
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
      const boloes = await BolaoService.getAll();
      return response.success(res, {
        message: "Bolões consultados com sucesso!",
        data: boloes,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },
};

export default BolaoController;
