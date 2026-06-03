import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { idDTO } from "./dto.js";
import GrupoController from "./controller.js";

const router = Router();

router.get("/", GrupoController.getAll);
router.get("/:id", validate(idDTO, "params"), GrupoController.getById);

export default router;
