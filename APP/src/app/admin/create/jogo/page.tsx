"use client";

import { useEffect, useState } from "react";

import Input from "@/src/app/components/input";
import Select from "@/src/app/components/select";

import { getSelecoesAction } from "./actions/getSelecoes";

import { Selecao } from "@/src/types/selecao";
import { createJogoAction } from "./actions/createJogo";
import AlertCard from "@/src/app/components/alertCard";

export default function CreateJogo() {
  const [selecoes, setSelecoes] = useState<Selecao[]>([]);
  const [alert, setAlert] = useState({
    message: "",
    error: false,
    visibility: false,
  });

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

  const handleSubmit = async (formData: FormData) => {
    const response = await createJogoAction(formData);

    if (!response.success) {
      return setAlert({
        message: response.message,
        error: true,
        visibility: true,
      });
    }

    setAlert({
        message: response.message,
        error: false,
        visibility: true,
      });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AlertCard message={alert.message} error={alert.error} visibility={alert.visibility}/>
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-zinc-200 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-800">Criar Jogo</h1>

          <p className="text-zinc-500 mt-1">
            Cadastre uma nova partida da Copa do Mundo.
          </p>
        </div>

        <form className="flex flex-col gap-6" action={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <Select label="" name="selecao1" options={selecoesOptions} />

            <div className="">
              <span className="font-bold text-sm text-lime-600">VS</span>
            </div>

            <Select label="" name="selecao2" options={selecoesOptions} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Select
              label="Fase"
              name="fase"
              options={[
                { label: "Grupos", value: "grupos" },
                { label: "16 Avos", value: "16 avos" },
                { label: "Oitavas", value: "oitavas" },
                { label: "Quartas", value: "quartas" },
                { label: "Semifinal", value: "semifinal" },
                { label: "Final", value: "final" },
              ]}
            />

            <Input
              label="Data da Partida"
              type="datetime-local"
              name="data"
              required
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            bg-lime-600
            text-white
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            hover:bg-lime-700
            hover:scale-[1.01]
            active:scale-[0.99]
            transition-all
          "
          >
            Criar Jogo
          </button>
        </form>
      </div>
    </div>
  );
}
