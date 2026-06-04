import UsuarioRouter from "./features/usuario/routes.js";
import SelecaoRouter from "./features/selecao/routes.js";
import GrupoRouter from "./features/grupo/routes.js";
import GrupoSelecaoRouter from "./features/grupo_selecao/routes.js";
import JogoRouter from "./features/jogo/routes.js";
import BolaoRouter from "./features/bolao/routes.js";

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
  {
    router: GrupoSelecaoRouter,
    path: "/api/grupo.selecao",
  },
  {
    router: JogoRouter,
    path: "/api/jogo",
  },
  {
    router: BolaoRouter,
    path: "/api/bolao",
  },
];
