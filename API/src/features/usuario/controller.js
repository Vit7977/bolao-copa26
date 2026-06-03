import * as response from "../../utils/response.js";
import UserService from "./service.js";

const UserController = {
  async create(req, res) {
    try {
      await UserService.create(req.body);
      return response.created(res, {
        message: "Usuário criado com sucesso!",
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
      const user = await UserService.getById(id);

      if (!user) {
        return response.notFound(res, {
          message: "Usuário não encontrado!",
        });
      }

      await UserService.update(id, req.body);
      return response.success(res, {
        message: "Usuário atualizado com sucesso!",
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return response.badRequest(res, {
          message: "Email e senha são obrigatórios!",
        });
      }

      const result = await UserService.login(email, senha);

      if (!result) {
        return response.badRequest(res, {
          message: "Email ou senha não confere!",
        });
      }

      return response.success(res, {
        message: "Usuário logado com sucesso!",
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
      const user = await UserService.getById(id);

      if (!user) {
        return response.notFound(res, {
          message: "Usuário não encontrado!",
        });
      }

      await UserService.delete(id);
      return response.success(res, {
        message: "Usuário deletado com sucesso!",
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
      const user = await UserService.getById(id);

      if (!user) {
        return response.notFound(res, {
          message: "Usuário não encontrado!",
        });
      }

      return response.success(res, {
        message: "Usuário consultado com sucesso!",
        data: user,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno do servidor!",
        error: error.message,
      });
    }
  },

  async getAll(req, res) {
    try {
      const data = await UserService.getAll();

      return response.success(res, {
        message: "Usuários consultados com sucesso!",
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

export default UserController;
