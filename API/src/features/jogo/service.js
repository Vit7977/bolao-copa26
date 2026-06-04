import JogoRepository from "./repository.js";

const JogoService = {
  async create(jogo) {
    return await JogoRepository.create(jogo);
  },
  async update(id, data) {
    return await JogoRepository.update(id, data);
  },
  async delete(id) {
    return await JogoRepository.delete(id);
  },
  async getById(id) {
    return await JogoRepository.getById(id);
  },
  async getAll() {
    return await JogoRepository.getAll();
  },
};

export default JogoService;
