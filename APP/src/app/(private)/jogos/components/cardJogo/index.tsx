"use client";
import { Grupo } from "@/src/types/grupo";
import { GrupoSelecao } from "@/src/types/grupo_selecao";
import { Jogo } from "@/src/types/jogo";
import { Selecao } from "@/src/types/selecao";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  jogo: Jogo;
  grupo_selecao: GrupoSelecao[];
  selecoes: Selecao[];
  grupos: Grupo[];
}

export default function CardJogo({
  jogo,
  selecoes,
  grupos,
  grupo_selecao,
}: Props) {
  const [focus, setFocus] = useState(false);
  const router = useRouter();

  const selecao1 = selecoes.find((s) => s.id === jogo.selecao1);
  const selecao2 = selecoes.find((s) => s.id === jogo.selecao2);

  const grupoJogo = grupos.find((g) =>
    grupo_selecao.some(
      (gs) =>
        gs.grupo === g.id &&
        (gs.selecao === jogo.selecao1 || gs.selecao === jogo.selecao2),
    ),
  );

  if (!selecao1 || !selecao2) {
    return <div>Seleções não encontradas</div>;
  }

  return (
    <div className="cursor-default relative flex flex-col justify-center items-center bg-gray-200 text-black w-75 shadow-lg shadow-lime-700/50 p-4 rounded-lg">
      {grupoJogo && (
        <span className="absolute bottom-2 right-2 bg-lime-600 text-lime-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
          Grupo {grupoJogo.nome.toUpperCase()}
        </span>
      )}
      <div className="flex flex-row gap-3">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-2 items-center w-24">
            <img
              className="w-24 rounded-lg"
              src={selecao1?.bandeira_url}
              alt=""
            />
            <div className="flex gap-1 items-center justify-center w-full">
              <span className="font-medium text-sm truncate min-w-0">
                {selecao1.nome}
              </span>
              <span className="font-bold shrink-0">{jogo.selecao1_gols}</span>
            </div>
          </div>

          <span className="font-bold text-lime-600 text-xl mt-18">X</span>

          {/* Selecao 2 */}
          <div className="flex flex-col gap-2 items-center w-24">
            <img
              className="w-24 rounded-lg"
              src={selecao2?.bandeira_url}
              alt=""
            />
            <div className="flex gap-1 items-center justify-center w-full">
              <span className="font-bold shrink-0">{jogo.selecao2_gols}</span>
              <span className="font-medium text-sm truncate min-w-0">
                {selecao2.nome}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-1 text-center font-medium">
        <span>{new Date(jogo.data).toLocaleDateString("pt-BR")}</span>
        <span>{new Date(jogo.data).toLocaleTimeString("pt-BR")}</span>
      </div>

      <span className="font-medium">Fase: {jogo.fase.toUpperCase()}</span>

      <button
        className="cursor-pointer absolute bottom-2 left-2 flex justify-center items-center bg-lime-600 text-white py-2 px-3 rounded-full font-semibold shadow-lg 
        hover:bg-lime-700 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        onClick={() => router.push(`/apostar?jogo=${jogo.id}`)}
      >
        <FaStar />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all text-[14px] duration-300 ${
            focus ? "max-w-24 opacity-100 pl-2" : "max-w-0 opacity-0"
          }`}
        >
          Apostar
        </span>
      </button>
    </div>
  );
}
