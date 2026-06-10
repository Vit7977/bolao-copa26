"use server"
import { Jogo } from "../types/jogo";
import { api } from "./api";

export const createJogo = async (data: Jogo) => {
  return await api("/jogo", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
