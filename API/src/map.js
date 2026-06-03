import UsuarioRouter from "./features/usuario/routes.js";
import SelecaoRouter from "./features/selecao/routes.js";
import GrupoRouter from "./features/grupo/routes.js";

export const routes = [
  {
    router: UsuarioRouter,
    path: "/api/usuario",
  },
  {
    router: SelecaoRouter,
    path: "/api/selecao",
  },
  {
    router: GrupoRouter,
    path: "/api/grupo",
  },
];
