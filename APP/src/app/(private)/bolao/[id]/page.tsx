"use client"
import { useParams } from "next/navigation";
import { getJogoByIdAction } from "@/src/app/actions/jogo";
import { useEffect, useState } from "react";
import { getSelecoesAction } from "@/src/app/actions/selecao";
import { Selecao } from "@/src/types/selecao";
import { Jogo } from "@/src/types/jogo";
import { FaStar } from "react-icons/fa";
import { getGruposAction, getGrupoSelecaoAction } from "@/src/app/actions/grupoSelecao";
import { GrupoSelecao } from "@/src/types/grupo_selecao";
import { Grupo } from "@/src/types/grupo";

export default function Bolao() {
    const [jogo, setJogo] = useState<Jogo>()
    const [selecoes, setSelecoes] = useState<Selecao[]>([]);
    const [grupos, setGrupos] = useState<Grupo[]>([])
    const [grupoSelecao, setGrupoSelecao] = useState<GrupoSelecao[]>([])

    const selecao1 = selecoes.find(s => s.id == jogo?.selecao1);
    const selecao2 = selecoes.find(s => s.id == jogo?.selecao2);

    const params = useParams();
    const { id } = (params)

    const grupoJogo = grupos.find((g) =>
        grupoSelecao.some(
        (gs) =>
            gs.grupo === g.id &&
        (gs.selecao === jogo?.selecao1 || gs.selecao === jogo?.selecao2),
    ),
  );

    useEffect(()=>{
        const loadAll = async () => {
            const responseJ = await getJogoByIdAction(Number(id));
            const responseS = await getSelecoesAction();
            const responseGrupos = await getGruposAction();
            const responseGrupoSel = await getGrupoSelecaoAction();
            
            if(responseJ.success) setJogo(responseJ.data);
            if(responseS.success) setSelecoes(responseS.data);
            if (responseGrupos.success) setGrupos(responseGrupos.data);
            if (responseGrupoSel.success) setGrupoSelecao(responseGrupoSel.data);
        }
        loadAll()
    }, [])

    return (
        <div className="h-screen flex justify-center items-center cursor-default">
            <div className="flex flex-col items-center gap-6">
                <span className="font-bold text-xl p-5">Fase: {jogo?.fase.toUpperCase()}</span>
                {
                    jogo?.fase === "grupos" && (
                        <span className="font-bold text-xl text-lime-400">Grupo {grupoJogo?.nome.toUpperCase()}</span>
                    )
                }
                <div className="flex gap-3">
                    <span className="font-bold text-xl">{new Date(jogo?.data ?? "").toLocaleDateString("pt-BR", {day: "2-digit", month: "long"})}</span>
                    <span className="font-bold text-xl">{new Date(jogo?.data ?? "").toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"})}</span>
                </div>
                <div className="flex items-center gap-5">

                    <div className="flex flex-col gap-3 text-center">
                        <img className="w-50 h-50 rounded-full object-cover border-3" src={selecao1?.bandeira_url} alt="" />
                        <span className="font-medium">{selecao1?.nome}</span>
                        <span className="font-medium text-lime-500">{jogo?.selecao1_gols}</span>
                    </div>
                        <span className="font-bold">X</span>
                    <div className="flex flex-col gap-3 text-center">
                        <img className="w-50 h-50 rounded-full object-cover border-3" src={selecao2?.bandeira_url} alt="" />
                        <span className="font-medium">{selecao2?.nome}</span>
                        <span className="font-medium text-lime-500">{jogo?.selecao2_gols}</span>
                    </div>

                </div>


                <button className="cursor-pointer flex items-center justify-center gap-2 p-3 min-w-32 bg-lime-500 rounded-full transition-all duration-300 hover:bg-lime-600">
                    <FaStar/>
                    <span className="text-xl font-medium">Bolão</span>
                </button>
            </div>
        </div>
    )
}