"use client"
import CardJogo from "./components/cardJogo";
import { getJogosAction } from "./actions/getJogos";
import { getSelecoesAction } from "./actions/getSelecoes";
import { useState, useEffect } from "react";
import { Selecao } from "@/src/types/selecao";
import { Jogo } from "@/src/types/jogo";

export default function Jogos () {
    const [selecoes, setSelecoes] = useState<Selecao[]>([]);
    const [jogos, setJogos] = useState<Jogo[]>([]);

    useEffect(()=>{
        const loadAll = async() => {
            const responseSel = await getSelecoesAction();
            const responseJogos = await getJogosAction();

            if(responseSel.success){
                setSelecoes(responseSel.data);
            }

            if(responseJogos.success){
                setJogos(responseJogos.data);
            }
        }
        loadAll()
    }, [])

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="p-3 font-bold text-3xl">JOGOS</h1>
            <div className="grid grid-cols-4 gap-4">
            {
                jogos.map((item) => {
                    return <CardJogo key={item.id} jogo={item} selecoes={selecoes}/>
                })
            }
            </div>
        </div>
    )
}