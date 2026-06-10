"use client"
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
    <div className="flex flex-col justify-center items-center bg-gray-200 text-black w-80 shadow-lg shadow-lime-700/50 p-2 rounded-lg">
      <div className="flex flex-row gap-3">

    <div className="flex gap-2 items-center">
      <div className="flex flex-col gap-2">
        <img className="w-25" src={selecao1?.bandeira_url} alt="" />
        <div className="flex gap-2 items-center justify-center">
          <span className="font-medium">{selecao1.nome}</span>
          <span className="font-bold">{jogo.selecao1_gols}</span>
        </div>
      </div>
      
        <span className="font-bold text-lime-600 text-xl mt-18">X</span>

      <div className="flex flex-col gap-2">
        <img className="w-26" src={selecao2?.bandeira_url} alt="" />
        <div className="flex gap-2 items-center justify-center">
          <span className="font-bold">{jogo.selecao2_gols}</span>
          <span className="font-medium">{selecao2.nome}</span>
        </div>
      </div>
    </div>

      </div>

      <div className="flex gap-1 text-center font-medium">
        <span>{new Date(jogo.data).toLocaleDateString("pt-BR")}</span>
        <span >{new Date(jogo.data).toLocaleTimeString("pt-BR")}</span>
      </div>

      <span className="font-medium">Fase: {jogo.fase.toUpperCase()}</span>

    </div>
  );
}
