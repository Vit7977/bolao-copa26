import { api } from "./api";

export const getSelecoes = async () => {
  return api("/selecao", {
    method: "GET",
  });
};
