import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createBolaoDTO, idDTO } from "./dto.js";
import BolaoController from "./controller.js";

const router = Router();

router.get("/", BolaoController.getAll);
router.get("/usuario/:id", validate(idDTO, "params"), BolaoController.getByUser);
router.get("/:id", validate(idDTO, "params"), BolaoController.getById);

router.post("/", validate(createBolaoDTO), BolaoController.create);
router.patch(
  "/jogo/:id/pontuacao",
  validate(idDTO, "params"),
  BolaoController.updatePontuacao,
);
router.delete("/:id", validate(idDTO, "params"), BolaoController.delete);

export default router;
