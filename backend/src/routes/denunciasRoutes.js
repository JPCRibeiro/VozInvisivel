import express from "express";
import DenunciasController from "../controllers/denunciasController.js";

const router = express.Router();

router
  .get("/denuncias", DenunciasController.listarDenuncias)
  .get("/denuncias/:id", DenunciasController.listarDenunciaPorId)
  .post("/denuncias", DenunciasController.cadastrarDenuncia)

export default router;