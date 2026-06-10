export interface Jogo {
  id?: number;
  selecao1: number;
  selecao2: number;
  fase: string;
  data: string;
  selecao1_gols?: number;
  selecao2_gols?: number;
}
