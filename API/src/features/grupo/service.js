import GrupoRepository from "./repository.js";

const GrupoService = {
  async getById(id) {
    return await GrupoRepository.getById(id);
  },
  async getAll() {
    return await GrupoRepository.getAll();
  },
};

export default GrupoService;
