import express from "express";
const itensRouter = express.Router();
import Item from "../models/item";
import itensRepository from "../repositories/itens-repository";

import {
  controlerCriarUser,
  controlerAtualizarUm,
  controlerLerUm,
  controlerLerTodos,
  controlerDeletarUm,
} from "../controllers";

itensRouter.post("/itens", (req, res) => {
  controlerCriarUser(req, res);
});

itensRouter.get("/itens", (req, res) => {
  controlerLerTodos(req, res);
});

itensRouter.get("/itens/:id", (req, res) => {
  controlerLerUm(req, res);
});

itensRouter.put("/itens/:id", (req, res) => {
  controlerAtualizarUm(req, res);
});

itensRouter.delete("/itens/:id", (req, res) => {
  controlerDeletarUm(req, res);
});

export default itensRouter;
