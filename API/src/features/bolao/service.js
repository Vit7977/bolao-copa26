import BolaoRepository from "./repository.js";
import JogoRepository from "../jogo/repository.js";
import calcPontuacao from "../../utils/pontuacao.js";

const BolaoService = {
  async create(bolao) {
    return await BolaoRepository.create(bolao);
  },

  async updatePontuacao(jogoId) {
    const jogo = await JogoRepository.getById(jogoId);
    if (!jogo) {
      throw new Error("Jogo não encontrado!");
    }

    const boloes = await BolaoRepository.getByJogo(jogoId);

    if (!boloes.length) {
      throw new Error("Nenhum bolão encontrado para este jogo!");
    }

    await Promise.all(
      boloes.map((bolao) => {
        const pontuacao = calcPontuacao(
          jogo.selecao1_gols,
          jogo.selecao2_gols,
          bolao.palpite1,
          bolao.palpite2,
          jogo.fase,
        );

        return BolaoRepository.updatePontuacao(bolao.id, pontuacao);
      }),
    );

    return {
      jogoId,
      palpitesAtualizados: boloes.length,
    };
  },

  async delete(id) {
    return await BolaoRepository.delete(id);
  },

  async getById(id) {
    return await BolaoRepository.getById(id);
  },

  async getByUser(userId) {
    return await BolaoRepository.getByUser(userId);
  },

  async getAll() {
    return await BolaoRepository.getAll();
  },
};

export default BolaoService;
