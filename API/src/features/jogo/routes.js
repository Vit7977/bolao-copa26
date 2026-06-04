import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createJogoDTO, updateJogoDTO, idDTO } from "./dto.js";
import JogoController from "./controller.js";

const router = Router();

router.get("/", JogoController.getAll);
router.get("/:id", validate(idDTO, "params"), JogoController.getById);

router.post("/", validate(createJogoDTO), JogoController.create);
router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updateJogoDTO),
  JogoController.update,
);
router.delete("/:id", validate(idDTO, "params"), JogoController.delete);

export default router;
