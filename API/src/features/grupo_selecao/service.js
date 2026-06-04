import GrupoSelecaoRepository from "./repository.js";

const GrupoSelecaoService = {
  async getById(id) {
    return await GrupoSelecaoRepository.getById(id);
  },

  async getAll() {
    return await GrupoSelecaoRepository.getAll();
  },
};

export default GrupoSelecaoService;
