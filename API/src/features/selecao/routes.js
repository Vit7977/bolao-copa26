import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createSelecaoDTO, updateSelecaoDTO, idDTO } from "./dto.js";
import SelecaoController from "./controller.js";

const router = Router();

router.get("/", SelecaoController.getAll);
router.get("/:id", validate(idDTO, "params"), SelecaoController.getById);

router.post("/", validate(createSelecaoDTO), SelecaoController.create);
router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updateSelecaoDTO),
  SelecaoController.update,
);
router.delete("/:id", validate(idDTO, "params"), SelecaoController.delete);

export default router;
