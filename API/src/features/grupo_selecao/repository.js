import pool from "../../config/pool.js";

const GrupoSelecaoRepository = {
  async getById(id) {
    const [grupoSelecao] = await pool.execute(
      `SELECT * FROM grupo_selecao WHERE id = ?`,
      [id],
    );
    return grupoSelecao[0];
  },
  async getAll() {
    const [gruposSelecoes] = await pool.execute(`SELECT * FROM grupo_selecao;`);
    return gruposSelecoes;
  },
};

export default GrupoSelecaoRepository;
