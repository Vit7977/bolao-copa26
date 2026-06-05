"use client";

import { useEffect, useState } from "react";

import Input from "@/src/app/components/input";
import Select from "@/src/app/components/select";

import { getSelecoesAction } from "./actions/getSelecoes";

import { Selecao } from "@/src/types/selecao";

export default function CreateJogo() {
  const [selecoes, setSelecoes] = useState<Selecao[]>([]);

  useEffect(() => {
    const loadSelecoes = async () => {
      const response = await getSelecoesAction();

      if (response.success) {
        setSelecoes(response.data);
      }
    };

    loadSelecoes();
  }, []);

  const selecoesOptions = selecoes.map((selecao) => ({
    label: selecao.nome,
    value: String(selecao.id),
  }));

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col bg-white gap-2 p-4 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-lg">NOVO JOGO</h1>

        <form className="flex flex-col gap-2">
          <div className="flex justify-center items-center">
            <Select
              label=""
              name="selecao1"
              options={selecoesOptions}
            />

            <span className="font-bold text-xl px-2">X</span>

            <Select
              label=""
              name="selecao2"
              options={selecoesOptions}
            />
          </div>

          <div className="flex justify-center items-center gap-2">
            <Select
              label="Fase"
              name="fase"
              options={[
                { label: "Grupos", value: "grupos" },
                { label: "Oitavas", value: "oitavas" },
                { label: "Quartas", value: "quartas" },
                { label: "Semifinal", value: "semifinal" },
                { label: "Final", value: "final" },
              ]}
            />

            <span className="px-2"></span>

            <Input
              label="Data"
              type="date"
              name="data"
              required
            />
          </div>

          <button
            type="submit"
            className="
              bg-lime-500
              text-white
              font-medium
              p-2
              rounded-lg
              hover:bg-lime-600
              transition-all
              duration-300
            "
          >
            Criar Jogo
          </button>
        </form>
      </div>
    </div>
  );
}