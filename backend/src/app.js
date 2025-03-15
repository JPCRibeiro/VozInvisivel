import "dotenv/config";
import cors from "cors";
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
});

const app = express();
app.use(express.json());
app.use(cors({ 
  origin: "http://localhost:5173" 
}));
routes(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});