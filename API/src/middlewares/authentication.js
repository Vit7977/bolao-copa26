import jwt from "jsonwebtoken";
import * as response from "../utils/response.js";

const authToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return response.unauthorized(res, { message: "Token não fornecido!" });
    }

    const parts = authHeader.split(" ");

    const token = parts[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        return response.unauthorized(res, {
          message: "Token inválido ou expirado",
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return response.error(res, {
      message: "Erro na autenticação",
      error: error.message,
    });
  }
};

export default authToken;