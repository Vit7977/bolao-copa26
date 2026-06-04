export default function calcPontuacao(gols1, gols2, palpite1, palpite2, faseJogo) {
  const multPontuacao = faseJogo === "grupos" ? 1 : 2;

  const vencedorJogo = gols1 > gols2 ? 1 : gols2 > gols1 ? 2 : 0;

  const vencedorPalpite = palpite1 > palpite2 ? 1 : palpite2 > palpite1 ? 2 : 0;

  // Placar exato
  if (gols1 === palpite1 && gols2 === palpite2) {
    return 25 * multPontuacao;
  }

  // Errou vencedor
  if (vencedorJogo !== vencedorPalpite) {
    return 0;
  }

  // Empate não exato
  if (vencedorJogo === 0) {
    return 10 * multPontuacao;
  }

  const golsVencedorReal = vencedorJogo === 1 ? gols1 : gols2;

  const golsPerdedorReal = vencedorJogo === 1 ? gols2 : gols1;

  const golsVencedorPalpite = vencedorPalpite === 1 ? palpite1 : palpite2;

  const golsPerdedorPalpite = vencedorPalpite === 1 ? palpite2 : palpite1;

  const diferencaReal = golsVencedorReal - golsPerdedorReal;

  const diferencaPalpite = golsVencedorPalpite - golsPerdedorPalpite;

  // Vencedor + gols do vencedor
  if (golsVencedorReal === golsVencedorPalpite) {
    return 18 * multPontuacao;
  }

  // Vencedor + diferença de gols
  if (diferencaReal === diferencaPalpite) {
    return 15 * multPontuacao;
  }

  // Vencedor + gols do perdedor
  if (golsPerdedorReal === golsPerdedorPalpite) {
    return 12 * multPontuacao;
  }

  // Apenas vencedor
  return 10 * multPontuacao;
}
