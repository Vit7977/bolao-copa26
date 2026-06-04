import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { idDTO } from "./dto.js";
import GrupoSelecaoController from "./controller.js";

const router = Router();

router.get("/", GrupoSelecaoController.getAll);
router.get("/:id", validate(idDTO, "params"), GrupoSelecaoController.getById);

export default router;
