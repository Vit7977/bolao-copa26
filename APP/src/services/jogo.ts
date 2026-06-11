"use server"
import { Jogo } from "../types/jogo";
import { api } from "./api";

export const createJogo = async (data: Jogo) => {
  return await api("/jogo", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getJogos = async() => {
  return await api("/jogo", {
    method: "GET"
  })
}

export const getJogoById = async(id:number) => {
  return await api(`/jogo/${id}`, {
    method: "GET"
  })
}