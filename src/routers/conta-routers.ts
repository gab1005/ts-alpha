import express from "express";
import { controlerCriarConta } from "../controllers/controllers-solicitados/criarConta";
const contaRouter = express.Router();

contaRouter.post("/itens", (req, res) => {
  controlerCriarConta(req, res);
});

export default contaRouter;
