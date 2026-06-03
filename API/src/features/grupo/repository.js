import pool from "../../config/pool.js";

const GrupoRepository = {
  async getById(id) {
    const [grupo] = await pool.execute(`SELECT * FROM grupo WHERE id = ?`, [
      id,
    ]);
    return grupo[0];
  },
  async getAll() {
    const [grupos] = await pool.execute(`SELECT * FROM grupo;`);
    return grupos;
  },
};

export default GrupoRepository;
