import pool from "../../config/pool.js";

const BolaoRepository = {
  async create(bolao) {
    return await pool.execute(
      `INSERT INTO bolao(usuario, jogo, palpite1, palpite2) 
        VALUES(?, ?, ?, ?)`,
      [bolao.usuario, bolao.jogo, bolao.palpite1, bolao.palpite2],
    );
  },

  async updatePontuacao(id, data) {
    return await pool.execute(`UPDATE bolao SET pontuacao = ? WHERE id = ?`, [
      data,
      id,
    ]);
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM bolao WHERE id = ?`, [id]);
  },

  async getById(id) {
    const [bolao] = await pool.execute(`SELECT * FROM bolao WHERE id = ?`, [
      id,
    ]);
    return bolao[0];
  },

  async getByJogo(jogoId) {
    const [boloes] = await pool.execute(`SELECT * FROM bolao WHERE jogo = ?`, [
      jogoId,
    ]);
    return boloes;
  },

   async getByUser(userId) {
    const [boloes] = await pool.execute(`SELECT * FROM bolao WHERE usuario = ?`, [
      userId,
    ]);
    return boloes;
  },

  async getAll() {
    const [boloes] = await pool.execute(`SELECT * FROM bolao;`);
    return boloes;
  },
};

export default BolaoRepository;
