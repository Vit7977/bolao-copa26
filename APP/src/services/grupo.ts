"use server";
import { api } from "./api";

export const getGrupos = async () => {
  return api("/grupo", {
    method: "GET",
  });
};
