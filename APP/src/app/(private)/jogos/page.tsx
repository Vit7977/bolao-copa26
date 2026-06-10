"use client";
import CardJogo from "./components/cardJogo";
import { getJogosAction } from "./actions/getJogos";
import { getSelecoesAction } from "./actions/getSelecoes";
import { useState, useEffect, useMemo } from "react";
import { Selecao } from "@/src/types/selecao";
import { Jogo } from "@/src/types/jogo";
import Filter from "./components/filter";
import { GrupoSelecao } from "@/src/types/grupo_selecao";
import { Grupo } from "@/src/types/grupo";
import {
  getGruposAction,
  getGrupoSelecaoAction,
} from "./actions/getGrupoSelecao";

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

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="p-3 font-bold text-3xl">JOGOS</h1>
      <div className="w-full flex justify-end px-8 mb-4">
        <Filter
          filtros={filtros}
          filtroAtivo={filtroAtivo}
          onFiltroChange={setFiltroAtivo}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {jogosFiltrados.map((item) => (
          <CardJogo
            key={item.id}
            jogo={item}
            selecoes={selecoes}
            grupo_selecao={grupoSelecao}
            grupos={grupos}
          />
        ))}
      </div>
    </div>
  );
}
