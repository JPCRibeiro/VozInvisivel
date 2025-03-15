import express from "express";
import DenunciasController from "../controllers/denunciasController.js";

const router = express.Router();

router
  .get("/api/denuncias", DenunciasController.listarDenuncias)
  .get("/api/denuncias/:id", DenunciasController.listarDenunciaPorId)
  .post("/api/denuncias", DenunciasController.cadastrarDenuncia)

export default router;