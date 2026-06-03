import pool from "../../config/pool.js";

const UserRepository = {
  async create(data) {
    return await pool.execute(
      `INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)`,
      [data.nome, data.email, data.senha],
    );
  },

  async update(id, data) {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(data), id];

    return await pool.execute(
      `UPDATE usuario SET ${fields} WHERE id = ?`,
      values,
    );
  },

  async login(email) {
    const [user] = await pool.execute(`SELECT * FROM usuario WHERE email = ?`, [
      email,
    ]);
    return user[0];
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM usuario WHERE id = ?`, [id]);
  },

  async getById(id) {
    const [user] = await pool.execute(`SELECT * FROM usuario WHERE id = ?`, [
      id,
    ]);
    return user[0];
  },

  async getAll() {
    const [users] = await pool.execute(`SELECT * FROM usuario;`);
    return users;
  },
};

export default UserRepository;
