"use server";
import { api } from "./api";

export const getGrupoSelecao = async () => {
  return api("/grupo.selecao", {
    method: "GET",
  });
};
