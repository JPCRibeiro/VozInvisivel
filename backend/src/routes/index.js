import express from "express";
import denuncias from "./denunciasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send('Servidor rodando com Node.js!'));
  app.use(express.json(), denuncias);
};

export default routes;