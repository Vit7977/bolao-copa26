import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createUserDTO, updateUserDTO, loginDTO, idDTO } from "./dto.js";
import UserController from "./controller.js";
import authToken from "../../middlewares/authentication.js";

const router = Router();

router.get("/", UserController.getAll);
router.get("/:id", validate(idDTO, "params"), UserController.getById);

router.get("/auth/validate", authToken, (req, res) => {
  res.json({
    message: "Token válido!",
    user: req.user,
  });
});

router.post("/", validate(createUserDTO), UserController.create);
router.post("/login", validate(loginDTO), UserController.login);

router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updateUserDTO),
  UserController.update,
);

router.delete("/:id", validate(idDTO, "params"), UserController.delete);

export default router;
