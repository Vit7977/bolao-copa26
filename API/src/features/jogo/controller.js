import JogoService from "./service.js";
import * as response from "../../utils/response.js";

const JogoController = {
  async create(req, res) {
    try {
      await JogoService.create(req.body);
      return response.created(res, {
        message: "Jogo criado com sucesso!",
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
      const jogo = await JogoService.getById(id);

      if (!jogo) {
        return response.notFound(res, {
          message: "Jogo não encontrado!",
        });
      }

      await JogoService.update(id, req.body);
      return response.success(res, {
        message: "Jogo atualizado com sucesso!",
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
      const jogo = await JogoService.getById(id);

      if (!jogo) {
        return response.notFound(res, {
          message: "Jogo não encontrado!",
        });
      }

      await JogoService.delete(id);
      return response.created(res, {
        message: "Jogo deletado com sucesso!",
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
      const jogo = await JogoService.getById(id);

      if (!jogo) {
        return response.notFound(res, {
          message: "Jogo não encontrado!",
        });
      }

      return response.success(res, {
        message: "Jogo consultado com sucesso!",
        data: jogo,
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
      const jogos = await JogoService.getAll();

      return response.success(res, {
        message: "Jogos consultados com sucesso!",
        data: jogos,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },
};

export default JogoController;
