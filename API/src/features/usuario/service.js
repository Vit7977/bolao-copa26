import UserRepository from "./repository.js";
import { hashPass, validatePass } from "../../utils/passUtils.js";
import jwt from "jsonwebtoken";

const UserService = {
  async create(data) {
    const hashedPass = await hashPass(data.senha);
    return await UserRepository.create({ ...data, senha: hashedPass });
  },

  async update(id, data) {
    const updateData = { ...data };

    if (updateData.senha) {
      updateData.senha = await hashPass(updateData.senha);
    } else {
      delete updateData.senha;
    }

    return await UserRepository.update(id, updateData);
  },

  async login(email, senha) {
    const user = await UserRepository.login(email);

    if (!user) return null;

    const matchPass = await validatePass(user.senha, senha);

    if (!matchPass) return null;

    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES;

    const token = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
        userPoints: user.pontos,
        createdAt: user.created_at,
      },
      secret,
      { expiresIn },
    );

    const { senha: _, ...userData } = user;

    return { token, user: userData };
  },

  async delete(id) {
    return await UserRepository.delete(id);
  },

  async getById(id) {
    return await UserRepository.getById(id);
  },

  async getAll() {
    return await UserRepository.getAll();
  },
};

export default UserService;
