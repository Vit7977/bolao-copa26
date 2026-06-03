import pool from "../../config/pool.js";

const SelecaoRepository = {
  async create(data) {
    return await pool.execute(
      `INSERT INTO selecao(nome, bandeira_url) VALUES(?, ?);`,
      [data.nome, data.bandeira_url],
    );
  },
  async update(id, data) {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(data), id];

    return await pool.execute(
      `UPDATE selecao SET ${fields} WHERE id = ?`,
      values,
    );
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM selecao WHERE id = ?`, [id]);
  },

  async getById(id) {
    const [selecao] = await pool.execute(`SELECT * FROM selecao WHERE id = ?`, [
      id,
    ]);
    return selecao[0];
  },

  async getAll() {
    const [selecoes] = await pool.execute(`SELECT * FROM selecao;`);
    return selecoes;
  },
};

export default SelecaoRepository;
