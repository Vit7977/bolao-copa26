import pool from "../../config/pool.js";

const JogoRepository = {
  async create(jogo) {
    return await pool.execute(
      `INSERT INTO jogo(selecao1, selecao2, fase, data, selecao1_gols, selecao2_gols) 
        VALUES(?, ?, ?, ?, ?, ?)`,
      [
        jogo.selecao1,
        jogo.selecao2,
        jogo.fase,
        jogo.data,
        jogo.selecao1_gols ?? 0,
        jogo.selecao2_gols ?? 0,
      ],
    );
  },

  async update(id, data) {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(data), id];

    return await pool.execute(`UPDATE jogo SET ${fields} WHERE id = ?`, values);
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM jogo WHERE id = ?`, [id]);
  },

  async getById(id) {
    const [jogo] = await pool.execute(`SELECT * FROM jogo WHERE id = ?`, [id]);
    return jogo[0];
  },

  async getAll() {
    const [jogos] = await pool.execute(`SELECT * FROM jogo;`);
    return jogos;
  },
};

export default JogoRepository;
