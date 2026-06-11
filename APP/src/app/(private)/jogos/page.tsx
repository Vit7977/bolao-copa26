"use client";
import CardJogo from "./components/cardJogo";
import { getJogosAction } from "../../actions/jogo";
import { getSelecoesAction } from "../../actions/selecao";
import { useState, useEffect, useMemo } from "react";
import { Selecao } from "@/src/types/selecao";
import { Jogo } from "@/src/types/jogo";
import Filter from "./components/filter";
import { GrupoSelecao } from "@/src/types/grupo_selecao";
import { Grupo } from "@/src/types/grupo";
import {
  getGruposAction,
  getGrupoSelecaoAction,
} from "../../actions/grupoSelecao";

const filtros = [
  { label: "Fase", value: "fase" },
  { label: "Data", value: "data" },
  { label: "Seleção", value: "selecao" },
  { label: "Grupo", value: "grupo" },
];

export default function Jogos() {
  const [selecoes, setSelecoes] = useState<Selecao[]>([]);
  const [jogos, setJogos] = useState<Jogo[]>([]);
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [grupoSelecao, setGrupoSelecao] = useState<GrupoSelecao[]>([]);
  const [filtroAtivo, setFiltroAtivo] = useState("fase");

  useEffect(() => {
    const loadAll = async () => {
      const responseSel = await getSelecoesAction();
      const responseJogos = await getJogosAction();
      const responseGrupos = await getGruposAction();
      const responseGrupoSel = await getGrupoSelecaoAction();

      if (responseSel.success) setSelecoes(responseSel.data);
      if (responseJogos.success) setJogos(responseJogos.data);
      if (responseGrupos.success) setGrupos(responseGrupos.data);
      if (responseGrupoSel.success) setGrupoSelecao(responseGrupoSel.data);
    };
    loadAll();
  }, []);

  // useMemo recalcula a ordem quando jogos ou filtroAtivo mudam - sem re-fetch
  const jogosFiltrados = useMemo(() => {
    const copia = [...jogos];

    const getGrupoNome = (jogo: Jogo) => {
      const gs = grupoSelecao.find(
        (gs) => gs.selecao === jogo.selecao1 || gs.selecao === jogo.selecao2,
      );
      const grupo = grupos.find((g) => g.id === gs?.grupo);
      return grupo?.nome ?? "";
    };

    switch (filtroAtivo) {
      case "fase":
        return copia.sort((a, b) => a.fase.localeCompare(b.fase));
      case "data":
        return copia.sort(
          (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime(),
        );
      case "selecao":
        return copia.sort((a, b) => (a.selecao1 ?? 0) - (b.selecao1 ?? 0));
      case "grupo":
        return copia.sort((a, b) =>
          getGrupoNome(a).localeCompare(getGrupoNome(b)),
        );
      default:
        return copia;
    }
  }, [jogos, filtroAtivo]);

  // Agrupa jogos por data (só quando filtroAtivo === "data")
  const jogosPorData = useMemo(() => {
    if (filtroAtivo !== "data") return null;
  
    return jogosFiltrados.reduce<Record<string, Jogo[]>>((acc, jogo) => {
      const data = new Date(jogo.data).toLocaleDateString("pt-BR", {day: "2-digit", month: "long"});
      if (!acc[data]) acc[data] = [];
      acc[data].push(jogo);
      return acc;
    }, {});
  }, [jogosFiltrados, filtroAtivo]);

  return (
    <div className="w-full flex flex-col items-center">
  <h1 className="p-3 font-bold text-3xl">JOGOS</h1>
  <div className="w-full flex justify-end px-8">
    <Filter
      filtros={filtros}
      filtroAtivo={filtroAtivo}
      onFiltroChange={setFiltroAtivo}
    />
  </div>

  {jogosPorData ? (
    // Renderização agrupada por data
    Object.entries(jogosPorData).map(([data, jogosDodia]) => (
      <div key={data} className="w-full mb-6">

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-medium px-8 p-2 mb-2 bg-lime-600 rounded-full">{data}</h2>
          <div className="grid grid-cols-5 gap-4 px-8">
            {jogosDodia.map((item) => (
              <div key={item.id}>
                <CardJogo
                  jogo={item}
                  selecoes={selecoes}
                  grupo_selecao={grupoSelecao}
                  grupos={grupos}
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    ))
  ) : (
    // Renderização normal (fase, seleção, grupo)
    <div className="grid grid-cols-5 gap-4">
      {jogosFiltrados.map((item) => (
        <div key={item.id}>
          <CardJogo
            jogo={item}
            selecoes={selecoes}
            grupo_selecao={grupoSelecao}
            grupos={grupos}
          />
        </div>
      ))}
    </div>
  )}
</div>
  );
}
