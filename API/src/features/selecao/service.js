import SelecaoRepository from "./repository.js";

const SelecaoService = {
  async create(data) {
    return await SelecaoRepository.create(data);
  },

  async update(id, data) {
    return await SelecaoRepository.update(id, data);
  },

   async delete(id) {
    return await SelecaoRepository.delete(id);
  },

  async getById(id) {
    return await SelecaoRepository.getById(id);
  },

  async getAll(){
    return await SelecaoRepository.getAll();
  }
};

export default SelecaoService;
