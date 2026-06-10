import { Jogo } from "@/src/types/jogo";
import { Selecao } from "@/src/types/selecao";

interface Props {
  jogo: Jogo;
  selecoes: Selecao[];
}

export default function CardJogo({ jogo, selecoes }: Props) {
  const selecao1 = selecoes.find((s) => s.id === jogo.selecao1);
  const selecao2 = selecoes.find((s) => s.id === jogo.selecao2);

  if (!selecao1 || !selecao2) {
    return <div>Seleções não encontradas</div>;
  }

  return (
    <div>
      <img src={selecao1?.bandeira_url} alt="" />
      <img src={selecao2?.bandeira_url} alt="" />
    </div>
  );
}
